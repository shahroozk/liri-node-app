# liri-node-app

## Requirements

- Make a Node.js app that depends on user input from the command line
- Integrate Twitter, Spotify, and OMDb APIs via the appropriate NPM modules
- Use API calls and parse through returned JSON objects, outputting them in a specified format
- Read commands and queries from file

## Technologies Used

- Node.js
- JavaScript
- Band in Town API (via twitter npm module)
- Spotify API (via spotify npm module)
- OMDb API (via request npm module)

## Get Started

Here's a quick rundom of the commands you can use in LIRI.

### Get concert-this
Retrieves information for a concert:
```
node liri.js concert-this
```
![screenshot 25](https://user-images.githubusercontent.com/42070728/49245815-4a475e00-f3c8-11e8-9924-838ba6c4dbc5.png)

### Get Song Info
Retrieves song information for a track:
```
node liri.js spotify-this-song "Show must Go On"
```
### Get Movie Info
Retrieves movie information for a movie:
```
node liri.js movie-this "Gladiator"
```
### Get Random Info
Gets random text inside a file and does what it says:
```
node liri.js do-what-it-says
```
