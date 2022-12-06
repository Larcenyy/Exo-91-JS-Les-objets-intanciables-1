let k = document.getElementById("perso1");
let j = document.getElementById("perso2");

let o = document.querySelectorAll("div");

function Personne(nom, prenom, sexe, job){
    this.nom = nom;
    this.prenom = prenom;
    this.sexe = sexe;
    this.job = job;

    this.getNomPrenom = function (){
        return this.nom + " " + this.prenom + " " + this.sexe + " " + this.job
    }
}

let john = new Personne("dad", "john", "homme", "rien");
let nono = new Personne("nono", "noemie", "femme", "rien");


k.innerHTML = john.getNomPrenom() + "<br>"
k.innerHTML += nono.getNomPrenom() + "<br>"


for (let i = 0; i < o.length; i++){
    o[i][0].innerHTML = john.nom
    o[i][1].innerHTML = john.prenom
    o[i][2].innerHTML = john.sexe
}


console.log(nono.getNomPrenom());
console.log(john.getNomPrenom());