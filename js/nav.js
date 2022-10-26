//------------------------ ATRIBUTOS ----------------------//
// elementos DOM
const nav = document.querySelector("nav");
const navItems = document.querySelectorAll("nav .nav_item");
const navMenu = document.querySelector("nav #menu")
// valor margen superior
const sticky = nav.offsetTop;
// variable booleana para desplegar / esconder el menu
let toggleEffect = false;

//------------------------ FUNCIONALIDADES ----------------------//
function stickyNav(){
    // si la distancia "scrolleada" es mayor o igual al margen sup. 
    // del nav, la posicion del elemento cambia a "fixed".
    // para que se quede permanentemente en la parte sup. de la pantalla
    if (window.pageYOffset >= sticky){
        nav.style.position = "fixed";
    } else {
        // de lo contrario vuelve a su estado original
        nav.style.position = "relative";
    }
}

function desplegarMenu(){
    if(toggleEffect == false){
        navItems.forEach(element => {
            element.style.display = "flex";
        });
        nav.style.overflowY = "hidden";
        nav.style.transition = "0.25s ease-in-out";
        nav.style.height = "400px";
        navMenu.textContent = "Cerrar menu ↑";
        toggleEffect = true;

    } else{
        navItems.forEach(element => {
            element.style.display = "none";
        });
        nav.style.overflowY = "hidden";
        nav.style.transition = "0.25s ease-in-out";
        nav.style.height = "40px";
        navMenu.textContent = "Abrir Menu ↓";
        toggleEffect = false;
    }
}





