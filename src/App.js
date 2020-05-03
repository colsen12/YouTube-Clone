import React from 'react';
import { Grid } from "@material-ui/core";
import { SearchBar, VideoDetail, VideoList } from "./components";
import youtube from "./api/youtube";

export class App extends React.Component {

	state = {
		videos: [],
		selectedVideo: null,
	}

	componentDidMount(){
		this.handleSubmit();
	}

	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video });
	}

	handleSubmit = async (searchTerm) => {
		const response = await youtube.get("search", {
			params:{
					part: "snippet",
					maxResults: 5,
					key: "AIzaSyAe4G0oeSBGaf-XiQGtyBN9acdeyiqdJcU",
					q: searchTerm
				}});
//setting state of video which was created above^^ to "items" which 
//you can find by console logging handleSubmit function to see the API's array
		this.setState({ videos: response.data.items, 
			selectedVideo: response.data.items[0] });
	}

	render() {
		//destructuring for components
		const { selectedVideo, videos } = this.state

		return (
			<Grid justify="center" container spacing={10}>
				<Grid item xs={12}>
					<Grid container spacing={10}>
						<Grid item xs={12}>
							<SearchBar onFormSubmit={this.handleSubmit} />
						</Grid>
						<Grid item xs={8}>
							<VideoDetail video={selectedVideo} />
						</Grid>
						<Grid item xs={4}>
							<VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		)
	}
}

export default App