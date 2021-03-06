import Search from '../components/Search.js';
import VideoPlayer from '../components/VideoPlayer.js';
import VideoList from '../components/VideoList.js';
import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      currentVideo: null,
      isLoading: true
    };


  }

  getYouTubeVideos(query) {
    searchYouTube(query, (videos) =>
      this.setState({
        currentVideo: videos[0],
        isLoading: false,
        videos: videos
      })
    );
  }

  onVideoClick(clickedVideo) { //?
    console.log('click');
    this.setState({
      currentVideo: clickedVideo
    });
  }
  componentDidMount() {
    this.getYouTubeVideos('dog');
  }
  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearchInputChange={this.getYouTubeVideos.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5" >
            <VideoList videos={this.state.videos} titleClick={this.onVideoClick.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

export default App;