
function ok(){
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if ( username == "oui" && password == "non"){
        alert ("Login successfully");
        window.location = "mon_compte.html"; 
        return false;}
    else {
        alert("Mot de passe ou email incorrect")
        }
    }
