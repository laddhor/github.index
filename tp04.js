/*
partie personnelle pour un jeu 
fonction permetant de determiner si oui ou non le joueur réussi a prendre les bouts de bois dans le jeu 
*/


function sss(){
	for (let i=0; i<10; i++){
		console.log("SSSS");
	}
}
function chercherDuBois(combien){
if (combien == 1 ) {
	let compteur = Math.floor(Math.random()*6);
	if (compteur == 5) {
		console.log("perdu");
		sss();
	}
	else { 
		console.log("gagner");
	}
}
else if (combien == 2 ) {
	let compteur = Math.floor(Math.random()*6);
	if (compteur >=	4) {
		console.log("perdu");
		sss();
	}
	else { 
		console.log("gagner");
	}
}
else if (combien == 3 ) {
	let compteur = Math.floor(Math.random()*6);
	if (compteur >=	3) {
		console.log("perdu");
		sss();
	}
	else { 
		console.log("gagner");
	}
}
else if (combien == 4 ) {
	let compteur = Math.floor(Math.random()*6);
	if (compteur >=	2) {
		console.log("perdu");
		sss();
	}
	else { 
		console.log("gagner");
	}
}
else if (combien == 5 ) {
	let compteur = Math.floor(Math.random()*6);
	if (compteur >=	1) {
		console.log("perdu");
		sss();
	}
	else { 
		console.log("gagner");
	}
}
}
