import { useNavigate } from "react-router-dom";
import communityApi from "apis/community";
import styled from "styled-components";
import { Button } from "../index";
import { useSelector } from "react-redux";
import { RootState } from "store";

interface ArticleProps {
	articleData: {
		article_id: number;
		member_id: number;
		member_name: string;
		member_image: string;
		subject: string;
		title: string;
		content: string;
		createAt: string;
		updateAt: string;
		deleteAt: string;
		vote_exist: boolean;
		image_url_list: {
			article_image_id: number;
			createdAt: string;
			deletedAt: string;
			updatedAt: string;
			image_url: string;
		}[];
	};
}

function Header({ articleData }: ArticleProps) {
	const { id } = useSelector((state: RootState) => state.user);
	const navigate = useNavigate();

	const handleDeleteClick = async (articleId: number) => {
		if (window.confirm("삭제 하시겠습니까?")) {
			await communityApi.deleteCommunity(articleId);
			navigate("/community");
		}
	};

	const handleUpdateClick = () => {
		navigate(`/community/update/${articleData.article_id}`, {
			state: {
				articleData,
			},
		});
	};

	const handleListButtonClick = () => {
		navigate("/community");
	};

	return (
		<Container>
			<Button onClick={handleListButtonClick}>목록</Button>
			{id === articleData.member_id && (
				<div>
					<Button onClick={handleUpdateClick}>수정</Button>
					<Button onClick={() => handleDeleteClick(articleData.article_id)}>삭제</Button>
				</div>
			)}
		</Container>
	);
}

const Container = styled.div`
	width: 100%;
	display: flex;
	margin-top: 8rem;
	justify-content: space-between;
`;

export default Header;
