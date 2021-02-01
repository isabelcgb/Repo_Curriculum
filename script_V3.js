//alerta
alert("Bienvenidos a mi Curriculum");

//comentarios
const element = document.querySelector('.nombre');
element.addEventListener('focus', cambioFoco);
function cambioFoco() {
    element.style.backgroundColor = '#04819E';
};

element.addEventListener('focusout', cambioNOFoco);
function cambioNOFoco() {
    element.style.backgroundColor = '#5ccccc';
};

//boton
document.getElementById("BotonGuardar").addEventListener("click", alerta)
function alerta () {
    document.getElementById("BotonGuardar").innerHTML = alert("Muchas gracias, los comentarios se han guardado.")
}

const btn= document.querySelector('#menu-btn');
const menu= document.querySelector('#sidemenu');
btn.addEventListener('click', e => {
    menu.classList.toggle("menu-expanded");
    menu.classList.toggle("menu-collapsed");

    document.querySelector('body').classList.toggle('body-expanded');
})