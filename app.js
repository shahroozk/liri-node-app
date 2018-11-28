require('dotenv').config()

// Include  NPM packages

var fs = require("fs");
var axios = require("axios");
var Spotify = require('node-spotify-api');
var keys = require('./keys.js');
var spotify = new Spotify(keys.spotify);
var moment = require("moment");
var request = require ("request");

//  take in user inputs

 var command = process.argv[2]
 var thing = ''

 thing = process.argv.slice(3).join(" ");


//Switch break statement to direct to the next function the user wanted

switch (command) {
    case 'concert-this':
        bandTown(thing);
        break;
    case 'spotify-this-song':
        spotifyThis(thing);
        break;
    case 'movie-this':
        movieThis(thing);
        break;
    case 'do-what-it-says':
        random();
        break;
}
// Band in Town STart

function bandTown (thing){
    if (thing == null) {
        thing = 'please insert your Artist';
    }
    request("https://rest.bandsintown.com/artists/" + thing + "/events?app_id=codingbootcamp", function (error, response, body) {
        
    if (error) console.log(error);
        
        var result  =  JSON.parse(body)[0];
        console.log("Venue name " + result.venue.name);
        console.log("Venue location " + result.venue.city);
        console.log("Date of Event " +  moment(result.datetime).format("MM/DD/YYYY"));
       


    });
}
// spotify funcation START 

function spotifyThis(thing){
if (thing == null){
    thing = 'The Sign';
}
    spotify.search({ 
        type: 'track',
        query: thing 
    },  function(err, data) {
             if (err) {
             return console.log('Error occurred: ' + err);
     }
   
     console.log('--------------------');
     console.log('Artist(s): ' + data.tracks.items[0].artists[0].name);
     console.log('Song Title: ' + data.tracks.items[0].name);
     console.log('Preview Link: ' + data.tracks.items[0].preview_url);
     console.log('Album: ' + data.tracks.items[0].album.name);
     console.log('--------------------');
  });
}

//OMDB function START

function movieThis(thing) {
    
    if (thing == null) {
        thing = 'Mr. Nobody';
    }
    request("http://www.omdbapi.com/?t="+thing+"&y=&plot=short&apikey=a7fb43fb", function(error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log('--------------------');
            console.log('Title of the movie: ' + JSON.parse(body).Title);
            console.log('Release Year: ' + JSON.parse(body).Year);
            console.log('IMDB Rating of the movie: ' + JSON.parse(body).imdbRating);
            console.log('Country where the movie was produced: ' + JSON.parse(body).Country);
            console.log('Language of the movie: ' + JSON.parse(body).Language);
            console.log('Plot of the movie: ' + JSON.parse(body).Plot);
            console.log('Actors in the movie: ' + JSON.parse(body).Actors);
            console.log('--------------------');
        }
    });
}

// Do What START 

function random() {
    
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
            console.log(error);
        } else {
            
            spotifyThis(data[1]);
        }
    
    });
}