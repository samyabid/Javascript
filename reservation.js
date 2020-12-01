let sejour_id = new URLSearchParams(window.location.search).get("id")
let clone = document.getElementById("titrereservation");
newContent = clone.firstElementChild.innerHTML
    .replace(/{{nom}}/g, sejour_id)
clone.firstElementChild.innerHTML = newContent;	
document.getElementById("titredest").appendChild(clone);
document.getElementById('destination').value = sejour_id;

let prix = parseInt(new URLSearchParams(window.location.search).get("prix"));

let date1 =  Date.parse(document.getElementById('datea').value);
let date2 =  Date.parse(document.getElementById('dater').value);
let diffTime = Math.abs(date2 - date1);
let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

let nbAdultes = parseInt(document.getElementById('adultes').value);
let nbEnfants = parseInt(document.getElementById('enfants').value);
let total = nbAdultes*prix + nbEnfants*prix*40/100;
let child = document.getElementById("total");

newContent = child.innerHTML
    .replace(/{{total}}/g, total)
    child.innerHTML = newContent;	
document.getElementById("rowTotal").appendChild(child);
document.getElementById('prixTotal').value = total;

function calcul(){

    let date1 =  Date.parse(document.getElementById('datea').value);
    let date2 =  Date.parse(document.getElementById('dater').value);
    let diffTime = Math.abs(date2 - date1);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let nbAdultes = parseInt(document.getElementById('adultes').value);
    let nbEnfants = parseInt(document.getElementById('enfants').value);
    let total = (nbAdultes*prix + nbEnfants*prix*40/100)*diffDays;

    document.getElementById('total').innerHTML = total;
    document.getElementById('prixTotal').value = total;

}