const API_KEY = 'AIzaSyAmNXahEM--I1pk9lk13Y-2jhT1wZTHN9I';
//const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/videos?id='+ '100' +'&key='+ 'AIzaSyAmNXahEM--I1pk9lk13Y-2jhT1wZTHN9I'
STORE = {
  videos: [],

}
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search'
function getDataFromApi(searchTerm, callback) {
    const query = {
      q: `${searchTerm} in:name`,
      per_page: 5
    };
    $.getJSON(YOUTUBE_SEARCH_URL, query, callback);
  }
getDataFromApi('abc', callback => console.log(callback));
  

 STORE = {
     videos: [],

 }
function fetchVideos(searchTerm, callback) {
  // 1. Use `searchTerm` to construct the right query object based on the Youtube API docs
//    - Refer to curriculum assignment for help with the required parameters
// 2. Make a getJSON call using the query object and sending the provided callback in 
//    as the last argument
}
// function that's going to translate the string that the API gives us, parse it, send it to store
function decorateResponse(response) {
// 1. Map through the response object's `items` array
// 2. Return an array of objects, where each object contains the keys `id`, `title`, 
//    `thumbnail` which each hold the appropriate values from the API item object. You 
//    WILL have to dig into several nested properties! 
return 'return the object to be added to STORE'
}
function generateVideoItemHTML(video) {
return 'HTML String'
}

const render = function() {
// 1. Map through `store.videos`, sending each `video` through `generateVideoItemHtml`
// 2. Add this array of DOM elements to the appropriate DOM element
// TEST IT!
};

function handleFormSubmet() {
  //Adds form "submit" event listener that 1) initiates API call, 2) modifies store,
  // and invokes render
  // 2. Add an event listener to the form that will:
  //   a) Prevent default event
  //   b) Retrieve the search input from the DOM
  //   c) Clear the search input field
  //   d) Invoke the `fetchVideos` function, sending in the search value
  //   e) Inside the callback, send the API response through the `decorateResponse` function
  //   f) Inside the callback, add the decorated response into your store using the 
  //      `addVideosToStore` function
  //   g) Inside the callback, run the `render` function 
}

function main() {

}
$(main);
// function that's going to generate html from data
// JSON request function




