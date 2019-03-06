var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },

  printPlaylists: function () {
    for (var playlist in this["playlists"])
    {
      var playlistObj = this.playlists[playlist];
      console.log(playlistObj.id + ": " + playlistObj.name + " - " + playlistObj.tracks.length + ' tracks');
    }
  },

  printTracks: function () {
    for (var track in this["tracks"])
    {
      var tracklistObj = this.tracks[track];
      console.log(tracklistObj.id + ": " + tracklistObj.name + " by " + tracklistObj.artist + ' (' + tracklistObj.album + ')');
    }
  },

  printPlaylist: function (playlistId) {
    var playlistIdObj = this.playlists[playlistId];
    console.log(playlistIdObj.id + ": " + playlistIdObj.name + " - " + playlistIdObj.tracks.length + ' tracks');
    for (var trackId of playlistIdObj.tracks) {
      var track = this.tracks[trackId];
      console.log(track.id + ": " + track.name + " by " + track.artist + ' (' + track.album + ')');
    }
  },

  addTrackToPlaylist: function (trackId, playlistId) {
    this.playlists[playlistId].tracks.push(trackId);
  },

  addTrack: function (name, artist, album) {
    var i = uid();
    this.tracks[i] = {
      id:i,
      name: name,
      artist: artist,
      album: album
    }
  },

  addPlaylist: function (name) {
    var i = uid();
    this.playlists[i] = {
      id: i,
      name,
      tracks: []
    }
  }

}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

library.printPlaylists();

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

library.printTracks();

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

library.printPlaylist("p01");

// adds an existing track to an existing playlist

library.addTrackToPlaylist("t03", "p01");
library.printPlaylist("p01");

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// adds a track to the this

library.addTrack("James","Lebron","Miami");
library.printTracks();

// adds a playlist to the this

library.addPlaylist("Blah");
library.printPlaylists();

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

// var printSearchResults = function(query) {

// }