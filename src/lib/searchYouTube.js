import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  $.get('https://app-hrsei-api.herokuapp.com/api/recastly/videos', {
    youtubeapikey: YOUTUBE_API_KEY,
    q: query
  })
    .done((items) => {
      if (callback) {
        callback(items);
      }
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) =>
        console.log(err)
      );
    });
};

export default searchYouTube;
