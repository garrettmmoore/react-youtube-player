import { debounce } from 'lodash/function';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
import searchYouTube from './utils/searchYouTube';

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videoSearch = (term) => {
    searchYouTube({ key: API_KEY, term: term }, (videos) => {
      setVideos(videos);
      setSelectedVideo(videos[0]);
    });
  };

  const onSearchTermChange = debounce((term) => {
    videoSearch(term);
  }, 600);

  return (
    <div>
      <SearchBar onSearchTermChange={onSearchTermChange} />
      <VideoDetail video={selectedVideo} />
      <VideoList
        onVideoSelect={(selectedVideo) => setSelectedVideo(selectedVideo)}
        videos={videos}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
