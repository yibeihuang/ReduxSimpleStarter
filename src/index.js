import React from 'react';
import ReactDom from 'react-dom';
// Create new component. This component should produce some HTML

const App = function(){
	return <div>hello</div>;
}

// Take this component's generated HTML and put it on the page (in the DOM)


ReactDom.render(<App />, document.querySelector('.container'));