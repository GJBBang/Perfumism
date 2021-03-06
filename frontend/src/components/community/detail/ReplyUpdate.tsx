import communityApi from "apis/community";
import { CreateButton } from "components/button/Button";
import { FormContainer } from "components/review/Container";
import useReviewForm from "components/review/hooks/useReviewForm";
import Textarea from "components/review/Textarea";
import { useEffect } from "react";
import styled from "styled-components";

interface ReviewUpdateProp {
	commentId: number;
	articleId: number;
	oldContent: string;
	parentId: number;
	setIsEditable: React.Dispatch<React.SetStateAction<number>>;
	setReviews: React.Dispatch<React.SetStateAction<ReviewType[]>>;
}

interface ReviewType {
	comment_id: number;
	review_id: number;
	member_id: number;
	member_name: string;
	member_image: string;
	grade: number;
	content: string;
	likes: number;
	replyList: replyType[];
}

interface replyType {
	comment_id: number;
	member_id: number;
	member_name: string;
	article_id: number;
	parentId: number;
	content: string;
	created_at: string;
	updated_at: string;
	deleted_at: string;
	deletion: boolean;
}

function ReplyUpdate({
	oldContent,
	commentId,
	articleId,
	parentId,
	setIsEditable,
	setReviews,
}: ReviewUpdateProp) {
	const { handleInputChange, handleFormSubmit, content, setContent } = useReviewForm({
		sendReviewData: () => {
			return communityApi.updateComment(articleId, commentId, { content });
		},
	});

	useEffect(() => {
		setContent(oldContent);
	}, []);

	const handleReviewUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
		await handleFormSubmit(e);
		setIsEditable(-1);
		setReviews((reviews) =>
			reviews.map((review) => {
				if (review.comment_id === parentId) {
					review.replyList.map((reply) => {
						if (reply.comment_id === commentId) reply.content = content;
					});
				}
				return review;
			}),
		);
	};

	return (
		<FormContainer onSubmit={handleReviewUpdate}>
			<Div>
				<Textarea
					value={content}
					onChange={handleInputChange}
					placeholder="댓글을 수정하세요"
				></Textarea>
				<CreateButton>수정</CreateButton>
			</Div>
		</FormContainer>
	);
}

const Div = styled.div`
	display: flex;
	align-items: center;
`;
export default ReplyUpdate;
