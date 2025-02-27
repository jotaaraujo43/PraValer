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
        `${years} anos, ${days} dias <br> 
        ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
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

    rosa.style.left = Math.random() * 100 + "vw"; // Posição aleatória na tela
    rosa.style.animationDuration = (Math.random() * 5 + 2) + "s"; // Tempo de queda aleatório

    // Ajustando para começar a cair abaixo do carrossel
    const containerAltura = document.querySelector(".container").offsetHeight;
    rosa.style.top = `${containerAltura + 20}px`; // Começa um pouco abaixo do container

    document.body.appendChild(rosa); // Adiciona a rosa ao body

    // Remove a rosa após cair
    setTimeout(() => {
        rosa.remove();
    }, 7000);
}

// Criar rosas continuamente a cada 500ms
setInterval(criarRosa, 500);
