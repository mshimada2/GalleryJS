var chico = ["Bidwell Park", "Alpha Gamme Rho Fraternity House", "Chico State", "The Flumes", "Chico Mall"];

var current;

function shuffleGallery(){

//console.log(chico[Math.floor(Math.random() * chico.length)]);

do{
var store = Math.floor(Math.random() * chico.length);

}
while(chico[store] == current);

current = chico[store];
console.log(chico[store]);
}
