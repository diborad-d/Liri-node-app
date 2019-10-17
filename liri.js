const axios = require("axios");

axios
  .get("http://www.omdbapi.com/?i=tt3896198&apikey=22c5d793")
  .then(function(response) {
    console.log("The movie name is :" + response.data.imdbName);
    console.log("Release year:" + response.data.imdbReleaseYear);
    console.log("Cast:" + response.data.imdbCast);
    console.log("Rating:" + response.data.imdbRating);
  })
  .catch(function(error) {
    if (error.response) {
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
    }else if(error.request){
            console.log(error.request)
    }else{
            console.log("Error",error.message)
    }
    console.log(error.config);
  });

require("dotenv").config();
var keys = require("./keys.js");

const command = process.argv[2];
const argument = process.argv[3];

//check what command is being run
if (command === "movie-this") {
  console.log(argument);
}

var spotify = new IMDB(keys.IMDB);

// * `concert-this`

// * `spotify-this-song`

// * `movie-this`

// * `do-what-it-says`

////start with bands in town
//1. `node liri.js concert-this <artist/band name here>`

//  * Name of the venue

//  * Venue location

//  * Date of the Event (use moment to format this as "MM/DD/YYYY")
