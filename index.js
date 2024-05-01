let isPlay = false
const play = document.querySelector('.play')
// переключение на класс актив
const toggleColor = (el) => {
    const birds = document.querySelectorAll('.nav-link')
if (el.target.classList.contains('nav-link')){
birds.forEach((Element) =>{
    Element.classList.remove('active')
})
el.target.classList.add('active')
play.classList.remove('pause')
isPlay = false;
}
}

// свич картинки
const switchImg = (event) => {
    const main = document.querySelector('main')
    const targetClass = event.target.classList;
    if (targetClass.contains('nav-link1')){
        main.style.backgroundImage = "url(assets/img/solovey.jpg)"
        audio.src = "assets/audio/solovey.mp3"
    }
    if (targetClass.contains('nav-link2')){
        main.style.backgroundImage = "url(assets/img/drozd.jpg)"
        audio.src = "assets/audio/drozd.mp3"
    }
    if (targetClass.contains('nav-link3')){
        main.style.backgroundImage = "url(assets/img/zarynka.jpg)"
        audio.src = "assets/audio/zarynka.mp3"
    }
    if (targetClass.contains('nav-link4')){
        main.style.backgroundImage = "url(assets/img/javoronok.jpg)"
        audio.src = "assets/audio/javoronok.mp3"
    }
    if (targetClass.contains('nav-link5')){
        main.style.backgroundImage = "url(assets/img/slavka.jpg)"
        audio.src = "assets/audio/slavka.mp3"
    }
    if (targetClass.contains('bird-img')){
        main.style.backgroundImage = "url(assets/img/forest.jpg)"
    }
}
// меняем кнопку звука
const playImage = (event) => {
    if(event.target.classList.contains('play')){
        play.classList.toggle('pause')
        playAudio()
    }
    }



// делаем аудио
const audio = document.querySelector('audio')
function playAudio() {
    if (!isPlay){
    audio.currentTime = 0;
    audio.play();
    isPlay = true;
    }
    else {
    audio.pause();
    isPlay = false;
    }
  }


addEventListener('click', toggleColor)
addEventListener('click', switchImg)
addEventListener('click', playImage)



