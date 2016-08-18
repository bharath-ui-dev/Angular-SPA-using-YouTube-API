angular
	.module('myServiceModule',[])
	.controller('MyController', ['$scope','$http', function ($scope,$http) {
	$scope.search = function(query) {
		
		//searchYouTube(query,"video");
		$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&key=AIzaSyA6QnJd4pJdNcnUCud-z-1pOqIIELUxwog&q='+query)
		.then(onSearchSuccess, onSearchError);
    };
	
	// var searchYouTube = function(query,restype){
		// gapi.client.youtube.search.list({
			// part: 'snippet',
			// q: query,
			// maxResults: 5,
			// type: restype
		// })
		// .execute(function(response){
			// // var responseString = JSON.stringify(response.items,'',2);
			// // document.getElementById('JSONresponse').innerHTML += responseString;
			// onSuccess(response);
		// });
	// }
	var onSearchSuccess = function(result){
		$scope.results = result.data.items;
	}
	
	var onSearchError = function(error){
		$scope.errors= error;
	}
	
	$http.get('https://maps.googleapis.com/maps/api/geocode/json?address=7730+Hanover+Pkwy+Greenbelt+MD&key=AIzaSyA6QnJd4pJdNcnUCud-z-1pOqIIELUxwog')
	.then(onMapsSuccess,onMapsError);
	
	var onMapsSuccess = function(result){
		
		
	}
	
	var onMapsError = function(){
		
	}
  }]);
  
// // Called automatically when JavaScript client library is loaded.
// function onClientLoad() {
    // gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
// }

// // Called automatically when YouTube API interface is loaded (see line 9).
// function onYouTubeApiLoad() {
    // // This API key is intended for use only in this lesson.
    // // See http://goo.gl/PdPA1 to get a key for your own applications.
    // gapi.client.setApiKey('AIzaSyA6QnJd4pJdNcnUCud-z-1pOqIIELUxwog');
//}