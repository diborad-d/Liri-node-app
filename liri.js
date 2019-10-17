const axios = require("axios");

const command = process.argv[2];
if (command === "movie-this") {
  movieThis();
} else {
  console.log("Please use a valid command..toodloo~");
}

function movieThis() {
  var nodeArgs = process.argv;
  var movieName = nodeArgs[3];
  for (var i = 4; i < nodeArgs.length; i++) {
    if (i < nodeArgs.length) {
      movieName += `+${nodeArgs[i]}`;
    }
  }

  const queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&i=tt3896198&apikey=22c5d793";
  console.log(queryUrl);
  axios
    .get(queryUrl)
    .then(function(response) {
      console.log(`The movie name is: ${response.data.Title}`);
      console.log(`Release year: ${response.data.Year}`);
      console.log(`Cast: ${response.data.Actors}`);
      console.log(`Genre: ${response.data.Genre}`);
      console.log(`Rating: ${response.data.Rated}`);
    })
    .catch(function(error) {
      if (error.response) {
        console.log("---------------Data---------------");
        console.log(error.response.data);
        console.log("---------------Status---------------");
        console.log(error.response.status);
        console.log("---------------Status---------------");
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
}
// require("dotenv").config();
// var keys = require("./keys.js");

// var imdb = new IMDB(keys.IMDB); // only for spotify

// * `concert-this`

// * `spotify-this-song`

// * `movie-this`

// * `do-what-it-says`

////start with bands in town
//1. `node liri.js concert-this <artist/band name here>`

//  * Name of the venue

//  * Venue location

//  * Date of the Event (use moment to format this as "MM/DD/YYYY")
