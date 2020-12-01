let civilite = new URLSearchParams(window.location.search).get("civilite");
let nom = new URLSearchParams(window.location.search).get("nom");
let prenom = new URLSearchParams(window.location.search).get("prenom");
let mail  = new URLSearchParams(window.location.search).get("mail");
let phone  = new URLSearchParams(window.location.search).get("phone");
let datea  = new URLSearchParams(window.location.search).get("datea");
let dater  = new URLSearchParams(window.location.search).get("dater");
let adultes = new URLSearchParams(window.location.search).get("adultes");
let enfants = new URLSearchParams(window.location.search).get("enfants");
let dej = new URLSearchParams(window.location.search).get("dej");
let destination = new URLSearchParams(window.location.search).get("destination");
let prixTotal = new URLSearchParams(window.location.search).get("prixTotal");
let renseignements = new URLSearchParams(window.location.search).get("renseignements");

if(dej===null){
    dej="Petit déjeuner non inclus";
}
else{
    dej="Petit déjeuner inclus";
}

let clone = document.getElementById("recap");
newContent = clone.firstElementChild.innerHTML
    .replace(/{{civilite}}/g, civilite)
    .replace(/{{nom}}/g, nom)
    .replace(/{{prenom}}/g, prenom)
    .replace(/{{mail}}/g, mail)
    .replace(/{{phone}}/g, phone)
    .replace(/{{datea}}/g, datea)
    .replace(/{{dater}}/g, dater)
    .replace(/{{adultes}}/g, adultes)
    .replace(/{{enfants}}/g, enfants)
    .replace(/{{dej}}/g, dej)
    .replace(/{{destination}}/g, destination)
    .replace(/{{prixTotal}}/g, prixTotal)
    .replace(/{{renseignements}}/g, renseignements);

clone.firstElementChild.innerHTML = newContent;	

document.body.appendChild(clone);
