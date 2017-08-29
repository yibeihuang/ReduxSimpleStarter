import _ from  'lodash';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
// Create new component. This component should produce some HTML

// if it is a file we write (not library), we have to specify the path
import SearchBar from './components/search_bar'; 
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail.js';
import '../config.json';
const API_KEY = tmp.API;

// config function and call back function
class App extends Component {
	constructor (props) {
		super(props);
		this.state = { 
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('surfboards');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => { //term --> search term
			this.setState({ 
				videos : videos,
				selectedVideo: videos[0]
			}); //'videos' can be renamed as your wish
			// when key and value are the same string, we can condense them
			//same as this.setState({videos: videos})
		});
	}

	render() {
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

		return (
			// onSearchTermChange is a property of SearchBar
			<div>		
				<SearchBar onSearchTermChange={videoSearch} /> 
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} /> //passing prop videos to VideoList
			</div>
		);
	}
}

// Take this component's generated HTML and put it on the page (in the DOM)

ReactDom.render(<App />, document.querySelector('.container'));