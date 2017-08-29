import React, {Component } from 'react';


class SearchBar extends Component {
	constructor(props){
		super(props);

		this.state = { term: 'search...' };
	}

	render() {
		// onChange: React defined property
		return (
			<div className="search-bar">
				<input 
					value = {this.state.term}
					onChange={event => this.onInputChange(event.target.value)}></input>
			</div>
		); 
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term); // the same name as index.js
	}
}

export default SearchBar;