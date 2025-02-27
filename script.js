// Defina a data do primeiro encontro
const firstDate = new Date("2022-02-26T20:00:00");

function updateTimer() {
    const now = new Date();
    const diff = now - firstDate;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = 
        `${years} anos, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}

// Atualiza o contador a cada segundo
setInterval(updateTimer, 1000);
updateTimer();

// ---------------------- Carrossel ----------------------
let index = 0;
const imagens = document.querySelectorAll(".imagem-casal");

function trocarImagem() {
    imagens[index].classList.remove("active");
    index = (index + 1) % imagens.length;
    imagens[index].classList.add("active");
}

// Muda a imagem a cada 3 segundos
setInterval(trocarImagem, 3000);

// ---------------------- Rosas Caindo ----------------------
function criarRosa() {
    const rosa = document.createElement("div");
    rosa.classList.add("rose");

    rosa.style.left = Math.random() * 100 + "vw";
    rosa.style.animationDuration = (Math.random() * 3 + 2) + "s";

    const containerAltura = document.querySelector(".container").offsetHeight;
    rosa.style.top = `${containerAltura + 20}px`; 

    document.body.appendChild(rosa);

    // Remove a rosa após cair
    setTimeout(() => {
        rosa.remove();
    }, 5000);
}

// Criar rosas continuamente a cada 400ms
setInterval(criarRosa, 400);
