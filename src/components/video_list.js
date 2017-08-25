import React from 'react';

const VideoList = (props) => {
	return (
		<ul className="col-md-4 list-group"> //bootstrap
			{props.videos.length}
		</ul>
	);
}

// export it so that other files can make use of it as well
export default VideoList;