/*
    Autor: Miguel Alejandro Pérez Nuñez
    Descripción: Este archivo contiene el código JavaScript que se ejecutará en el navegador.
    Las "llaves" de encriptación que utilizaremos son las siguientes:
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"
*/

let textoIngresado = "";
let textoEncriptado = "";
let textoDesencriptado = "";
let mostrarMensaje = document.querySelector('.main__seccion-secundaria')
console.log(textoIngresado);

function leerTextoIngresado() {
    textoIngresado = document.getElementById("textoIngresado").value;
}

function encriptarTexto() {
    leerTextoIngresado();
    if (textoIngresado === "") {
        textoEncriptado = "No se ingresó ningún texto.";
        mostrarMensaje.innerHTML = '<div id="sinTexto" class="main__seccion-secundaria__sin-texto"><img src="assets/img/Muñeco.png" alt=""><p class="main__seccion-secundaria__texto1">Ningún mensaje fue encontrado</p><p class="main__seccion-secundaria__texto2">Ingresa el texto que desees encriptar o desencriptar.</p></div>';
    } else {
        textoEncriptado = textoIngresado.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
        mostrarMensaje.innerHTML = `<p class="main__seccion-secundaria__texto-respuesta">${textoEncriptado}</p>
                                <button onclick="copiarTexto()" class="main__seccion-secundaria__boton-copiar">Copiar</button>`;
    }
}

function desencriptarTexto() {
    leerTextoIngresado();
    if (textoIngresado === "") {
        textoDesencriptado = "No se ingresó ningún texto.";
        mostrarMensaje.innerHTML = '<div id="sinTexto" class="main__seccion-secundaria__sin-texto"><img src="assets/img/Muñeco.png" alt=""><p class="main__seccion-secundaria__texto1">Ningún mensaje fue encontrado</p><p class="main__seccion-secundaria__texto2">Ingresa el texto que desees encriptar o desencriptar.</p></div>';
    } else {
        textoDesencriptado = textoIngresado.replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
        mostrarMensaje.innerHTML = `<p class="main__seccion-secundaria__texto-respuesta">${textoDesencriptado}</p>
                                <button onclick="copiarTexto()" class="main__seccion-secundaria__boton-copiar">Copiar</button>`;
    }
}

function copiarTexto() {
    let textoRespuesta = document.querySelector('.main__seccion-secundaria__texto-respuesta');
    let textoRespuestaCopia = textoRespuesta.innerText;
    navigator.clipboard.writeText(textoRespuestaCopia);
    alert("Texto copiado al portapapeles.");
}