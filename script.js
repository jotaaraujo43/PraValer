// Defina a data do primeiro encontro (26/02/2022)
const firstDate = new Date("2022-02-26T00:00:00Z");

function updateTimer() {
    const now = new Date();
    const diff = now - firstDate;

    if (diff < 0) {
        document.getElementById("timer").innerHTML = "Ainda não houve o encontro!";
        return;
    }

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

    rosa.style.left = `${Math.random() * 100}%`;
    rosa.style.animationDuration = `${Math.random() * 5 + 5}s`;

    document.body.appendChild(rosa);

    setTimeout(() => {
        rosa.remove();
    }, 10000);
}

// Cria rosas a cada 200ms
setInterval(criarRosa, 200);
