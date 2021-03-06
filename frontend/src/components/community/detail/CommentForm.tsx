import communityApi from "apis/community";
import { CreateButton } from "components/button/Button";
import useReviewForm from "components/review/hooks/useReviewForm";
import Textarea from "components/review/Textarea";
import styled from "styled-components";

interface CommentFormProps {
	articleId: number;
	setUpdateReviews: React.Dispatch<React.SetStateAction<boolean>>;
}

function CommentForm({ articleId, setUpdateReviews }: CommentFormProps) {
	const { handleInputChange, handleFormSubmit, content } = useReviewForm({
		sendReviewData: () => {
			return communityApi.createComment(articleId, { content });
		},
	});

	const handleSubmitReview = async (e: React.FormEvent<HTMLFormElement>) => {
		if (content.trim()) {
			await handleFormSubmit(e);
			setUpdateReviews((prev) => !prev);
		} else {
			alert("댓글 내용을 입력하세요");
		}
	};

	return (
		<FormContainer onSubmit={handleSubmitReview}>
			<Textarea
				placeholder="댓글을 입력하세요"
				value={content}
				onChange={handleInputChange}
			></Textarea>
			<CreateButton>작성</CreateButton>
		</FormContainer>
	);
}

const FormContainer = styled.form`
	margin: 2rem 0;
	padding: 1rem;
	border: 0.3px solid #dedede;
	display: flex;
	align-items: center;
`;

export default CommentForm;
