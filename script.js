
function toggleMusic() {
    const musica = document.getElementById('musica');
    const botaoPlay = document.getElementById('botao-play');
    const iconePlay = document.getElementById('icone-play');

    if (musica.paused) {
        musica.play();
        iconePlay.classList.remove('fa-play');
        iconePlay.classList.add('fa-pause');
    } else {
        musica.pause();
        iconePlay.classList.remove('fa-pause');
        iconePlay.classList.add('fa-play');
    }
}

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


setInterval(updateTimer, 1000);
updateTimer();


let index = 0;
const imagens = document.querySelectorAll(".imagem-casal");

function trocarImagem() {
    imagens[index].classList.remove("active");
    index = (index + 1) % imagens.length;
    imagens[index].classList.add("active");
}


setInterval(trocarImagem, 3000);


function criarRosa() {
    const rosa = document.createElement("img");
    rosa.src = "rosa.png"; 
    rosa.classList.add("rosa");
    rosa.style.left = Math.random() * 100 + "vw"; 
    rosa.style.animationDuration = Math.random() * 3 + 5 + "s"; 

    
    document.body.appendChild(rosa);

    
    setTimeout(() => {
        rosa.remove();
    }, 8000); 
}


setInterval(criarRosa, 500);
