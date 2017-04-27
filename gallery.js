 var chico = [
   {description: "Bidwell Park",
    picture: "http://bidwellpark.org/wp-content/uploads/2014/04/BidwellPool.jpg",
    from: "bidwellpark.org"},
   {description: "Alpha Gamme Rho Fraternity House",
   picture: "http://cdn.totalfratmove.com/wp-content/uploads/2016/02/1233ecf67466f88fb89153c5359af6df.jpg",
   from: "totalfratmove.com"},
   {description: "Chico State",
   picture: "https://i.ytimg.com/vi/bpZIGBJVErY/maxresdefault.jpg",
   from:"YouTube"},
   {description: "Bear Hole",
   picture:"https://media-cdn.tripadvisor.com/media/photo-s/02/57/ad/31/bear-hole.jpg",
   from:"www.tripadvisor.com"},
   {description:"Monkey Face",
   picture:"https://s3.amazonaws.com/storage.filemobile.com/storage/25463209/15",
   from: "ulocal.kcra.com"}
 ];

var current;

function shuffleGallery(){

//console.log(chico[Math.floor(Math.random() * chico.length)]);

do{
var store = Math.floor(Math.random() * chico.length);

}
while(chico[store] == current);

current = chico[store];
document.getElementById("picture").src = current.picture;
document.getElementById("caption").innerHTML = current.description;
document.getElementById("source").innerHTML = "Image courtesy of " + current.from;
}
