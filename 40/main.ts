//define the make album function
function make_album(artistName:string,album_title:string,tracks?: number){
    let album:{artist:string,title:string,tracks?: number} = {
        artist: artistName,
        title: album_title,
    };
    if(tracks !== undefined){
       album.tracks =tracks; 

    }
    return album;
}

//calling three funcyions  and creating three variables with different values
 let album1 = make_album("daniyal","Album title 1")
 let album2 = make_album("danish","album title 2")

//calling a function with third perameter
 let album3 = make_album("hamza", "album title3",10)

 //print value of our object created my function
 console.log (album1);
 console.log(album2);
 console.log(album3);