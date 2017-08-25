import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
// Create new component. This component should produce some HTML

// if it is a file we write (not library), we have to specify the path
import SearchBar from './components/search_bar'; 
import VideoList from './components/video_list';
import '../package.json';
const API_KEY = tmp.API;

// config function and call back function


class App extends Component {
	constructor (props) {
		super(props);
		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({ videos }); //'videos' can be renamed as your wish
			// when key and value are the same string, we can condense them
			//same as this.setState({videos: videos})
		});
	}
	render() {
		// console.log(API_KEY);
		return (
			<div>		
				<SearchBar />
				<VideoList videos={this.state.videos}/> //passing prop videos to VideoList
			</div>
		);
	}
}

// Take this component's generated HTML and put it on the page (in the DOM)


ReactDom.render(<App />, document.querySelector('.container'));