import perfumeApi from "apis/perfume";
import profileApi from "apis/profile";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";
import useIntersectionObserver from "./useIntersectionObserver";

interface PerfumeType {
	perfume_id: string;
	perfume_name: string;
	image: string;
	average_grade: number;
	likes: number;
}

interface useInfiniteScrollProps {
	type: string;
	brandName?: string;
}

const useInfiniteScroll = ({ type, brandName }: useInfiniteScrollProps) => {
	const [perfumes, setPerfumes] = useState<PerfumeType[]>([]);
	const [totalPage, setTotalPage] = useState(0);
	const [currentPage, setCurrentPage] = useState(0);
	const [isLoading, setIsLoading] = useState(false);

	const filter = useSelector((state: RootState) => state.filter);

	useEffect(() => {
		if (currentPage && currentPage >= totalPage) return;
		getPerfumes();
	}, [currentPage]);

	const getPerfumes = async () => {
		setIsLoading(true);
		await new Promise((resolve) => setTimeout(resolve, 800));
		if (filter.accord === "" && filter.sort === "") {
			if (type === "perfumes")
				await perfumeApi.getPerfumes(currentPage).then((res) => {
					setPerfumes((prev) => prev.concat(res.data.perfumes));
					setTotalPage(res.data.total_page_count);
					setCurrentPage(res.data.current_page_count);
				});
			else if (type === "brandPerfumes")
				await perfumeApi.getBrandPerfumes(brandName, currentPage).then((res) => {
					setPerfumes((prev) => prev.concat(res.data.perfumes));
					setTotalPage(res.data.total_page_count);
					setCurrentPage(res.data.current_page_count);
				});
			else if (type === "favoritePerfumes")
				await profileApi.getFavorites().then((res) => {
					setPerfumes((prev) => prev.concat(res.data.perfumes));
					setTotalPage(res.data.total_page_count);
					setCurrentPage(res.data.current_page_count);
				});
		} else {
			if (type === "perfumes")
				await perfumeApi
					.getPerfumesByAccord(filter.accord, currentPage, filter.sort, filter.order)
					.then((res) => {
						setPerfumes((prev) => prev.concat(res.data.perfumes));
						setTotalPage(res.data.total_page_count);
						setCurrentPage(res.data.current_page_count);
					});
		}
		setIsLoading(false);
	};

	const onIntersect: IntersectionObserverCallback = async ([entry], observer) => {
		if (entry.isIntersecting && !isLoading) {
			observer.unobserve(entry.target);
			setCurrentPage((prev) => prev + 1);
			observer.observe(entry.target);
		}
	};

	const { setTarget } = useIntersectionObserver({
		root: null,
		rootMargin: "0px",
		threshold: 1,
		onIntersect,
	});

	return { setTarget, perfumes, isLoading };
};

export default useInfiniteScroll;
