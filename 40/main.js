// Define the make_album function
function make_album(artist_name, album_titel, tracks) {
    var album = {
        artist: artist_name,
        titel: album_titel
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Calling three functions and creating 3 variables with different value
var album1 = make_album("Zain", "Album titel 1");
var album2 = make_album("Osama", "Album titel 2");
// Calling a make_album function with third parameter
var album3 = make_album("Ali", "Album titel 3", 10);
// printing the variables
console.log(album1);
console.log(album2);
console.log(album3);
