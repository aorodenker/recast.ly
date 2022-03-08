import exampleVideoData from '../data/exampleVideoData.js';
import VideoListEntry from '../components/VideoListEntry.js';
/*
in videolist
. takes us to components directory
. takes us to src directory
*/

var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map(video => <VideoListEntry video={video} key={video.id.videoId} titleClick={props.titleClick}/>)}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};


// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;