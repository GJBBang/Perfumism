import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";
import useOutside from "../hooks/useOutside";

interface InputProps {
	isOn: boolean;
}

function Search() {
	const navigate = useNavigate();
	const [toggleSearch, setToggleSearch] = useState(false);
	const [content, setContent] = useState("");
	const Ref = useRef<HTMLFormElement>(null);
	const searchInput = useRef<HTMLInputElement>(null);
	useOutside({ Ref, setFunction: setToggleSearch, setSecondFunction: setContent });

	useEffect(() => {
		if (searchInput.current) searchInput.current.focus();
	}, [toggleSearch]);

	const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
		await setContent(event.target.value);
		runSearch(event.target.value);
	};

	const handleSearchInput = () => {
		setToggleSearch(!toggleSearch);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	const runSearch = debounce(async (keyword) => {
		if (keyword.length > 2) {
			navigate(`/search/${keyword}`, {
				state: { keyword },
			});
		} else {
			navigate("/");
		}
	}, 1000);

	return (
		<SearchForm ref={Ref} onSubmit={handleSubmit}>
			<Input
				placeholder="향수명, 브랜드, 키워드를 입력하세요"
				onChange={handleChange}
				isOn={toggleSearch}
				value={content}
				ref={searchInput}
			/>
			<FontAwesome icon={faMagnifyingGlass} onClick={handleSearchInput}></FontAwesome>
		</SearchForm>
	);
}

export default Search;

const Input = styled.input<InputProps>`
	width: 20rem;
	height: 3rem;
	padding: 1rem;
	position: absolute;
	box-shadow: 0 0 0.5rem gray;
	border: none;
	display: ${({ isOn }) => (isOn ? "block" : "none")};
	border-radius: 0.5rem;
	transform: ${({ isOn }) => isOn && "translate(-19rem, -.4rem)"};
	&:focus {
		outline: none;
	}

	@media ${(props) => props.theme.tabletS} {
		width: 15rem;
		transform: ${({ isOn }) => isOn && "translate(-13.5rem, -.4rem)"};
	}

	@media ${(props) => props.theme.mobileS} {
		width: 7.5rem;
		transform: ${({ isOn }) => isOn && "translate(-5.5rem, -.4rem)"};
		border: 1px solid #000;
		box-shadow: none;
	}
`;

const FontAwesome = styled(FontAwesomeIcon)`
	width: 1.8rem;
	height: 1.8rem;
	margin-left: 2rem;
	cursor: pointer;
`;

const SearchForm = styled.form`
	display: flex;
	margin-top: 0.3rem;
`;
