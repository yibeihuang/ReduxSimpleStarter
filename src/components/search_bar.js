import React, {Component } from 'react';


class SearchBar extends Component {
	constructor(props){
		super(props);

		this.state = { term: 'Initial Value' };
	}

	render() {
		// onChange: React defined property
		return (
			<div>
				<input 
					value = {this.state.term}
					onChange={event => this.setState({term: event.target.value})}></input>
			</div>
		); 
	}

}

export default SearchBar;