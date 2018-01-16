import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
const API_KEY = process.env.REACT_APP_API_KEY;



class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
             videos: [],
             selectedVideo: null
            };

        YTSearch({ key: API_KEY, term: "surfboards" }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
            //this.setState({videos:videos});
        });
    }

	render() {
		return (
			<div>
				<SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList videos={this.state.videos} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));
