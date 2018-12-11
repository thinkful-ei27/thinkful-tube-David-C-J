const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/videos?id='+ '100' +'&key='+ 'AIzaSyAmNXahEM--I1pk9lk13Y-2jhT1wZTHN9I'

function getDataFromApi(searchTerm, callback) {
    const query = {
      q: `${searchTerm} in:name`,
      per_page: 5
    };
    $.getJSON(YOUTUBE_SEARCH_URL, query, callback);
  }
getDataFromApi('abc', callback => console.log(callback));
  

// STORE = {
//     videos: [],
//     const = render,
// }

// function that's going to translate the string that the API gives us, parse it, send it to store
// function that's going to generate html from data
// JSON request function




