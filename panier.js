let destination = new URLSearchParams(window.location.search).get("destination")
let prixTotal = new URLSearchParams(window.location.search).get("prixTotal")
let clone = document.getElementById("recap");
newContent = clone.firstElementChild.innerHTML
    .replace(/{{destination}}/g, destination)
    .replace(/{{prixTotal}}/g, prixTotal)
clone.firstElementChild.innerHTML = newContent;	

document.body.appendChild(clone);