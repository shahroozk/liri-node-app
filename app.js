require('dotenv').config()

// Include  NPM packages

var fs = require("fs");
var axios = require("axios");
var Spotify = require("spotify-web-api-js");
var keys = require('./keys.js');
var spotify = new Spotify(keys.spotify);
var moment = require("moment");
var request = require ("request");

// take in user inputs

var command = process.argv[2]
var input = ''

input = process.argv.slice(2).join(" ");