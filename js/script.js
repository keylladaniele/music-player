/* Selecionando todas as tags e elementos */

const wrapper = document.querySelector(".wrapper"),
musicImg = wrapper.querySelector(".img-area img"),
musicName = wrapper.querySelector(".song-details .name"),
musicArtist = wrapper.querySelector(".song-details .artist"),
mainAudio = wrapper.querySelector("#main-audio"),
playPauseBtn = wrapper.querySelector(".play-pause");

let musicIndex = 3;

window.addEventListener("load", ()=> {
    loadMusic(musicIndex); // chamando a função de carregar música
})

//Função para carregar música
function loadMusic(indexNumb) {
    musicName.innerText = allMusic[indexNumb - 1].name;
    musicArtist.innerText = allMusic[indexNumb - 1].artist;
    musicImg.src = `imagens/${allMusic[indexNumb - 1].img}.jpg`;
    mainAudio.src = `musicas/${allMusic[indexNumb - 1].src}.mp3`;
}

//Função play music
function playMusic() {
    wrapper.classList.add("paused");
    mainAudio.play()
}



//Evento para dar play na música
playPauseBtn.addEventListener("click", ()=> {
    const isMusicPaused = wrapper.classList.contains("paused")
    // Se isMusicPaused é verdadeiro então chamar pauseMusic, senão chamar playMusic
    isMusicPaused ? pauseMusic() : playMusic();
})