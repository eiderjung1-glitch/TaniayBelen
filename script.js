document.addEventListener("DOMContentLoaded", () => {

const boton = document.getElementById("entrar");
const inicio = document.querySelector(".inicio");
const galaxia = document.getElementById("galaxia");
const musica = document.getElementById("musica");

// TODO el resto de tu código va aquí

});
const boton = document.getElementById("entrar");
const inicio = document.querySelector(".inicio");
const galaxia = document.getElementById("galaxia");
const musica = document.getElementById("musica");

boton.addEventListener("click", () => {

    inicio.style.display = "none";

    galaxia.style.display = "block";

    if (musica) {
        musica.play().catch(() => {});
    }

    crearFrases();

});

const frases = [
"Te amo ❤️",
"Mi princesa 👑",
"Mi niña 💗",
"Mi mujer 💖",
"Mi hogar",
"Mi universo",
"Siempre vos",
"Gracias por existir",
"Mi vida",
"Te elegiría mil veces",
"Mi corazón",
"Mi lugar seguro"
];

function crearFrases(){

    const contenedor = document.getElementById("frases");

    setInterval(()=>{

        const texto = document.createElement("span");

        texto.innerHTML =
        frases[Math.floor(Math.random()*frases.length)];

        texto.style.position="fixed";
        texto.style.left=Math.random()*100+"vw";
        texto.style.top=Math.random()*100+"vh";
        texto.style.color="white";
        texto.style.opacity=".85";
        texto.style.fontSize=(18+Math.random()*16)+"px";

        contenedor.appendChild(texto);

        setTimeout(()=>{

            texto.remove();

        },5000);

    },700);

}
// ⏳ CONTADOR DESDE EL 16 DE MAYO DE 2021
function actualizarContador() {
    const inicio = new Date("2021-05-16T00:00:00");
    const ahora = new Date();

    let años = ahora.getFullYear() - inicio.getFullYear();
    let meses = ahora.getMonth() - inicio.getMonth();
    let dias = ahora.getDate() - inicio.getDate();

    if (dias < 0) {
        meses--;
        const ultimoMes = new Date(
            ahora.getFullYear(),
            ahora.getMonth(),
            0
        ).getDate();
        dias += ultimoMes;
    }

    if (meses < 0) {
        años--;
        meses += 12;
    }

    const horas = ahora.getHours() - inicio.getHours();
    const minutos = ahora.getMinutes() - inicio.getMinutes();
    const segundos = ahora.getSeconds() - inicio.getSeconds();

    document.getElementById("contador").innerHTML =
        `💗 Llevamos juntas<br>
        <strong>${años} años, ${meses} meses y ${dias} días</strong><br>
        ${Math.max(0, horas)} horas, ${Math.max(0, minutos)} minutos y ${Math.max(0, segundos)} segundos ✨`;
}

actualizarContador();
setInterval(actualizarContador, 1000);
// 💗 CORAZONES
setInterval(() => {

    const corazon = document.createElement("div");

    corazon.className = "corazon";
    corazon.innerHTML = ["💗", "💖", "💕", "❤️", "💜"][Math.floor(Math.random() * 5)];

    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.fontSize = (18 + Math.random() * 25) + "px";
    corazon.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 10000);

}, 500);
// 🌠 ESTRELLAS FUGACES
setInterval(() => {

    const estrella = document.createElement("div");

    estrella.className = "estrella-fugaz";

    estrella.style.left = (60 + Math.random() * 40) + "vw";
    estrella.style.top = Math.random() * 50 + "vh";

    document.body.appendChild(estrella);

    setTimeout(() => {
        estrella.remove();
    }, 1500);

}, 2500);
function crearEstrella() {
    const estrella = document.createElement("div");
    estrella.className = "estrella";

    estrella.style.left = Math.random() * 100 + "vw";
    estrella.style.animationDuration = (2 + Math.random() * 2) + "s";

    document.body.appendChild(estrella);

    setTimeout(() => {
        estrella.remove();
    }, 4000);
}

setInterval(crearEstrella, 1200);