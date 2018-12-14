import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TopNav from "./TopNav";
import Snippet from "./PostSnippet";
import { GlobalStyle } from "./GlobalStyles";

const HomeWrapper = styled.div`
	width: 100%
	display: grid;
	justify-items: center;
`;

const HomeContent = styled.div`
	width: 300px;
	margin: 40px 0;
	display: grid;
	grid-template-rows: repeat(auto-fit, auto);
	grid-gap: 20px;

	@media only screen and (min-width: 768px) {
		width: 500px;
	}
`;

const BlogPosts = styled.div`
	justify-self: center;
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 20px;
	justify-items: center;
`;

class Home extends React.Component {
	/* Click Events */

	goToAbout = event => {
		event.preventDefault();
		this.props.history.push("/About");
	};

	/* Render Functions */

	renderPostSnippets = () => {

		const displayKeys = Object.entries(this.props.posts)
			.map(post => post[0])
			.slice(-2);

		return displayKeys.map(key => {
			return (
				<Snippet
					key={key}
					index={key}
					post={this.props.posts[key]}
					push={this.props.history.push}
				/>
			);
		});
	};

	render() {
		return (
			<React.Fragment>
				<TopNav push={this.props.history.push} />
					<HomeWrapper>
						<HomeContent>
							<h1>Latest Blog Posts</h1>
							<BlogPosts>
								{this.renderPostSnippets()}
							</BlogPosts>
						</HomeContent>
						<GlobalStyle />
					</HomeWrapper>
			</React.Fragment>
		);
	}
}

Home.propTypes = {
	posts: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired
};

export default Home;