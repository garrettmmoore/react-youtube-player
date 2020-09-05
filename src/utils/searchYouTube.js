const axios = require('axios');

const URL = 'https://www.googleapis.com/youtube/v3/search';

const searchYouTube = async (options, callback) => {
  if (!options.key) {
    throw new Error('YouTube API Key is missing');
  }

  const params = {
    part: 'snippet',
    key: options.key,
    q: options.term,
    type: 'video',
  };

  try {
    const res = await axios.get(URL, { params: params });
    callback(res.data.items);
  } catch (err) {
    console.error(err);
  }
};

export default searchYouTube;
