import React from 'react';
import ReactDom from 'react-dom';
// Create new component. This component should produce some HTML

// if it is a file we write (not library), we have to specify the path
import SearchBar from './components/search_bar'; 

const API_KEY = '';

const App = () => {
	return (
		
		<SearchBar />
		 

	);
}

// Take this component's generated HTML and put it on the page (in the DOM)


ReactDom.render(<App />, document.querySelector('.container'));