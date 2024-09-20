var Responsive = document.getElementById("menu-responsive")

var Ventana = document.getElementById("miventana");
var Img = document.querySelector(".web");
var Img1 = document.querySelector(".frontend");
var Img2 = document.querySelector(".titulo");
var Img3 = document.querySelector(".word");
var Img4 = document.querySelector(".power");
var VentanaImg = document.getElementById("imgGrande");

//Función que oculta o muestra el menu
function AbrirMenu() {
    Responsive.style.right = "0";
}

function CerrarMenu() {
    Responsive.style.right = "-200px";
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlycss");
        habilidades[2].classList.add("Cshap");
        habilidades[3].classList.add("asp");
        habilidades[4].classList.add("sql");
        habilidades[5].classList.add("api");
        habilidades[6].classList.add("react");
        habilidades[7].classList.add("mvc");
        habilidades[8].classList.add("angular");
        habilidades[9].classList.add("entity");
        habilidades[10].classList.add("work");
        habilidades[11].classList.add("excel");
        habilidades[12].classList.add("power");
        habilidades[13].classList.add("git");
        habilidades[14].classList.add("visual");
        habilidades[15].classList.add("bi");
        habilidades[16].classList.add("photo");
        habilidades[17].classList.add("ilustrator");
        habilidades[18].classList.add("project");
        habilidades[19].classList.add("sqlserver");
    }
}
//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}
// Cuando el usuario hace clic en la imagen, se abre la ventana
Img.onclick = function(){
    Ventana.style.display = "block";
    VentanaImg.src = this.src; // La imagen dentro de la ventana es la misma que la imagen pequeña
}
Img1.onclick = function(){
    Ventana.style.display = "block";
    VentanaImg.src = this.src; 
}
Img2.onclick = function(){
    Ventana.style.display = "block";
    VentanaImg.src = this.src; 
}
Img3.onclick = function(){
    Ventana.style.display = "block";
    VentanaImg.src = this.src; 
}
Img4.onclick = function(){
    Ventana.style.display = "block";
    VentanaImg.src = this.src; 
}
// Obtener el elemento <span> que cierra la ventana
var Span = document.querySelector(".cerrar");

// Cuando el usuario hace clic en <span> (x), cierra la ventana
Span.onclick = function() {
    Ventana.style.display = "none";
}