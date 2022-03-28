import perfumeApi from "apis/perfume";
import PerfumeList from "components/perfume/PerfumeList";
import ReviewCreateForm from "components/review/ReviewCreateForm";
import ReviewList from "components/review/ReviewList";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import LikeButton from "components/perfume/LikeButton";
import cookie from "react-cookies";

interface PerfumeDataType {
	perfume_id: number;
	perfume_name: string;
	brand: {
		brand_id: number;
		brand_name: string;
	};
	image: string;
	launch_year: number;
	average_grade: number;
	top_notes: string;
	middle_notes: string | null;
	base_notes: string | null;
	total_survey: number;
	longevity: string;
	sillage: string;
	accords: AccordType[];
	similar_perfume: [];
}

interface AccordType {
	accord_id: number;
	kor_name: string;
	eng_name: string;
}

type Params = {
	perfumeId: string;
};

function PerfumeDetail() {
	const { perfumeId } = useParams() as Params;
	const [perfumeData, setPerfumeData] = useState<PerfumeDataType | null>(null);
	const token = cookie.load("access_token");

	useEffect(() => {
		getPerfume();
	}, [perfumeId]);

	const getPerfume = async () => {
		await perfumeApi.getPerfume(perfumeId).then((res) => setPerfumeData(res.data));
	};

	return (
		perfumeData && (
			<Container>
				<PerfumeMainInfo>
					<Image src={`https://fimgs.net/mdimg/perfume/375x500.${perfumeData.image}`} />
					{token && <LikeButton perfumeId={perfumeId} />}
					<div>
						<h1>
							{perfumeData.perfume_name}
							<span>({perfumeData.launch_year})</span>
						</h1>
						<Link to={`/perfumes/${perfumeData.brand.brand_name}`}>
							{perfumeData.brand.brand_name}
						</Link>
						<h4>
							<span style={{ color: "#ffcb14" }}>★</span>
							{perfumeData.average_grade}
						</h4>
						<p>main accords</p>
						<ul>
							{perfumeData.accords.map((accord) => (
								<li key={accord.accord_id}>{accord.eng_name}</li>
							))}
						</ul>
					</div>
				</PerfumeMainInfo>
				<PerfumeSubInfo>
					<p>{perfumeData.top_notes}</p>
					<p>{perfumeData.middle_notes}</p>
					<p>{perfumeData.base_notes}</p>
					<p>{perfumeData.longevity}</p>
					<p>{perfumeData.sillage}</p>
				</PerfumeSubInfo>
				<Recommendation>
					<p>{perfumeData.perfume_name}과 비슷한 향수</p>
					<PerfumeList perfumes={perfumeData.similar_perfume} />
					<p>{perfumeData.brand.brand_name}의 다른 향수</p>
				</Recommendation>
				<ReviewCreateForm perfumeId={perfumeId} />
				<ReviewList perfumeId={perfumeId} />
			</Container>
		)
	);
}

const Container = styled.div`
	font-size: 1.5rem;
	display: flex;
	flex-direction: column;
`;

const PerfumeMainInfo = styled.div`
	display: flex;
	button {
		display: block;
	}
`;

const Image = styled.img`
	width: 15%;
	height: auto;
`;
const PerfumeSubInfo = styled.div``;
const Recommendation = styled.div``;

export default PerfumeDetail;
