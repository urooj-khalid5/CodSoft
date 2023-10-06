let menuVisible = false;
function Menu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function selection(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function effects(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let skillselement = document.getElementsByClassName("progress");
        skillselement[0].classList.add("javascript");
        skillselement[1].classList.add("htmlcss");
        skillselement[2].classList.add("photoshop");
        skillselement[3].classList.add("wordpress");
        skillselement[4].classList.add("drupal");
        skillselement[5].classList.add("comunicacion");
        skillselement[6].classList.add("trabajo");
        skillselement[7].classList.add("creatividad");
        skillselement[8].classList.add("dedicacion");
        skillselement[9].classList.add("proyect");
    }
}

window.onscroll = function(){
    efectoHabilidades();
} 
