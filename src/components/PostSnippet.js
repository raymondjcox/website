import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { GlobalStyle } from "./GlobalStyles";

const Snippet = styled.div`
	display: grid;
	grid-template-rows: repeat(2, auto);
	box-shadow: ${props => props.theme.bs};
	width: 100%;

	img {
		width: 100%;
	}

	@media only screen and (min-width: 768px) {
		width: 700px;
		border-bottom-left-radius: var(--S02);
		border-bottom-right-radius: var(--S02);
		img {
			width: 700px;
			border-top-left-radius: var(--S02);
			border-top-right-radius: var(--S02);
		}
	}
`;

const SnippetDetails = styled.div`
	display: grid;
	grid-gap: var(--S05);
	background: var(--Gray03);
	color: white;
	padding: var(--S06);
	font-size: var(--F04);

	p {
		color: var(--Gray01);
		font-size: var(--F02);
		text-transform: uppercase;
	}

	@media only screen and (min-width: 768px) {
		border-bottom-left-radius: var(--S02);
		border-bottom-right-radius: var(--S02);
	}
`;

const goToPost = (post, push, event) => {
	event.preventDefault();
	const slugify = require("slugify");
	const slug = slugify(post.title, { remove: /\./ });
	push(`/Post/${slug}`);
};

const PostSnippet = ({ post, push }) => (
	<Snippet
		onClick={event => {
			goToPost(post, push, event);
		}}
	>
		<img src={`${post.headerImage}`} alt="" />
		<SnippetDetails>
			<h4>{post.title}</h4>
			<p>{post.date}</p>
		</SnippetDetails>
		<GlobalStyle />
	</Snippet>
);

PostSnippet.propTypes = {
	post: PropTypes.object.isRequired
};

export default PostSnippet;
