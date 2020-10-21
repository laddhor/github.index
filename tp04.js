/*
fonction permetant de determiner si oui ou non le joueur réussi a prendre les bouts de bois dans le jeu 
*/


function sss(){
	for (let i=0; i<10; i++){
		console.log("SSSS");
	}
}

function houra(){
	for (let i=0; i<10; i++){
		console.log("Houraa!");
	}
}

function chercherDuBois(combien){
let compteur = 1
if (combien == 1 ) {
	let compteur = Math.floor(Math.random()*6);
	if (compteur == 5) {
		console.log("perdu");
		sss();
		console.log("1 bois gagné mais mordu");
	}
	else { 
		console.log("gagné");
		houra();
		console.log("2 bois gagné");
	}
}
else if (combien == 2 ) {
	let compteur = Math.floor(Math.random()*6);
	if (compteur >=	4) {
		console.log("perdu");
		sss();
		console.log("1 bois gagné mais mordu");
	}
	else { 
		console.log("gagné");
		houra();
		console.log("3 bois gagné");
	}
}
else if (combien == 3 ) {
	let compteur = Math.floor(Math.random()*6);
	if (compteur >=	3) {
		console.log("perdu");
		sss();
		console.log("1 bois gagné mais mordu");
	}
	else { 
		console.log("gagner");
		houra();
		console.log("4 bois gagné");
	}
}
else if (combien == 4 ) {
	let compteur = Math.floor(Math.random()*6);
	if (compteur >=	2) {
		console.log("perdu");
		sss();
		console.log("1 bois gagné mais mordu");
	}
	else { 
		console.log("gagné");
		houra();
		console.log("5 bois gagné");
	}
}
else if (combien == 5 ) {
	let compteur = Math.floor(Math.random()*6);
	if (compteur >=	1) {
		console.log("perdu");
		sss();
		console.log("1 bois gagner mais mordu");
	}
	else { 
		console.log("gagné");
		houra();
		console.log("6 bois gagné");
	}
}
else if ( (combien >=6)||(combien<0)) {
	console.log("entrée un nombre correcte")
}
}
