
let destinations = [
    {
        nom:"Alger",
        image:"../Images/alger.jpg",
        prix:1000,
        animaux:false,
        ptitDej:true,
        displayed:true
    },
    {
        nom:"Rio",
        image:"../Images/rio.jpg",
        prix:1100,
        animaux:false,
        ptitDej:true,
        displayed:true
    },
    {
        nom:"Bali",
        image:"../Images/bali.jpg",
        prix:1200,
        animaux:false,
        ptitDej:true,
        displayed:true
    },
    {
        nom:"Paris",
        image:"../Images/paris.jpg",
        prix:1300,
        animaux:true,
        ptitDej:true,
        displayed:true
    },
    {
        nom:"Ushuaia",
        image:"../Images/ushuaia.jpg",
        prix:1400,
        animaux:false,
        ptitDej:true,
        displayed:true
    },
    {
        nom:"Tokyo",
        image:"../Images/tokyo.jpg",
        prix:1500,
        animaux:false,
        ptitDej:true,
        displayed:true
    },
    {
        nom:"Bora-bora",
        image:"../Images/borabora.jpg",
        prix:1600,
        animaux:false,
        ptitDej:true,
        displayed:true
    },
    {
        nom:"Madrid",
        image:"../Images/madrid.jpg",
        prix:1050,
        animaux:true,
        ptitDej:false,
        displayed:true
    }
];

function setText()
{
    
    
    filtre = document.getElementById('filtreDest').value;
    if(filtre==="priceC"){
        for (const d of destinations) {
            if(d.displayed){
                let child = document.getElementById("dest");
            
                newContent = child.firstElementChild.innerHTML
                    .replace(/{{nom}}/g, d.nom)
                    .replace(/{{image}}/g, d.image)
                    .replace(/{{prix}}/g, d.prix);
            
                child.firstElementChild.innerHTML = newContent;
                
                document.body.removeChild(child);
            }
        }
        destinations.sort(function(a,b){ return a.prix-b.prix } ) //algo de tri;
        for (const d of destinations) {
            let cloneTest = document.importNode(template.content, true);
        
            newContent = cloneTest.firstElementChild.innerHTML
                .replace(/{{nom}}/g, d.nom)
                .replace(/{{image}}/g, d.image)
                .replace(/{{prix}}/g, d.prix);
        
            cloneTest.firstElementChild.innerHTML = newContent;	
        
            document.body.appendChild(cloneTest);

            d.displayed=true;
        }
    }
    else if(filtre==="priceD"){
        for (const d of destinations) {
            if(d.displayed){
                let child = document.getElementById("dest");
            
                newContent = child.firstElementChild.innerHTML
                    .replace(/{{nom}}/g, d.nom)
                    .replace(/{{image}}/g, d.image)
                    .replace(/{{prix}}/g, d.prix);
            
                child.firstElementChild.innerHTML = newContent;
                
                document.body.removeChild(child);
            }
        }
        destinations.sort(function(a,b){ return b.prix-a.prix } );
        for (const d of destinations) {
            let cloneTest = document.importNode(template.content, true);
        
            newContent = cloneTest.firstElementChild.innerHTML
                .replace(/{{nom}}/g, d.nom)
                .replace(/{{image}}/g, d.image)
                .replace(/{{prix}}/g, d.prix);
        
            cloneTest.firstElementChild.innerHTML = newContent;	
        
            document.body.appendChild(cloneTest);
            d.displayed=true;
        }
    }
    else if(filtre==="animaux"){
        for (const d of destinations) {
            if(d.displayed){
                let child = document.getElementById("dest");
            
                newContent = child.firstElementChild.innerHTML
                    .replace(/{{nom}}/g, d.nom)
                    .replace(/{{image}}/g, d.image)
                    .replace(/{{prix}}/g, d.prix);
            
                child.firstElementChild.innerHTML = newContent;
                
                document.body.removeChild(child);
            }
        }
        for (const d of destinations) {
            if(d.animaux){
                let cloneTest = document.importNode(template.content, true);
        
                newContent = cloneTest.firstElementChild.innerHTML
                    .replace(/{{nom}}/g, d.nom)
                    .replace(/{{image}}/g, d.image)
                    .replace(/{{prix}}/g, d.prix);
            
                cloneTest.firstElementChild.innerHTML = newContent;	
            
                document.body.appendChild(cloneTest);
            }
            else{
                d.displayed=false;
            }
        }
    }
    else if(filtre==="ptitdej"){
        for (const d of destinations) {
            if(d.displayed){
                let child = document.getElementById("dest");
            
                newContent = child.firstElementChild.innerHTML
                    .replace(/{{nom}}/g, d.nom)
                    .replace(/{{image}}/g, d.image)
                    .replace(/{{prix}}/g, d.prix);
            
                child.firstElementChild.innerHTML = newContent;
                
                document.body.removeChild(child);
            }
        }
        for (const d of destinations) {
            if(d.ptitDej){
                let cloneTest = document.importNode(template.content, true);
        
                newContent = cloneTest.firstElementChild.innerHTML
                    .replace(/{{nom}}/g, d.nom)
                    .replace(/{{image}}/g, d.image)
                    .replace(/{{prix}}/g, d.prix);
            
                cloneTest.firstElementChild.innerHTML = newContent;	
            
                document.body.appendChild(cloneTest);
            }
            else{
                d.displayed=false;
            }
        }
    }
}

let template = document.querySelector("#listeDestinations");
let clone = document.importNode(template.content, true);
let filtre;

for (const d of destinations) {
    let clone = document.importNode(template.content, true);

    newContent = clone.firstElementChild.innerHTML
        .replace(/{{nom}}/g, d.nom)
        .replace(/{{image}}/g, d.image)
        .replace(/{{prix}}/g, d.prix);

    clone.firstElementChild.innerHTML = newContent;	

    document.body.appendChild(clone);
}


