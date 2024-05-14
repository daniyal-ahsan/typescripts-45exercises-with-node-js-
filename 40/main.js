//define the make album function
function make_album(artistName, album_title, tracks) {
    var album = {
        artist: artistName,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//calling three funcyions  and creating three variables with different values
var album1 = make_album("daniyal", "Album title 1\n");
var album2 = make_album("danish", "album title 2");
//calling a function with third perameter
var album3 = make_album("hamza", "album title3", 10);
console.log(album1);
console.log(album2);
console.log(album3);
