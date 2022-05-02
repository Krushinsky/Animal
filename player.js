let audio = document.querySelector("#audio");    // Берём элемент audio
let time = document.querySelector(".time");      // Берём аудио дорожку
let btnPlay = document.querySelector(".play");   // Берём кнопку проигрывания
let btnPause = document.querySelector(".pause"); // Берём кнопку паузы
let btnPrev = document.querySelector(".prev");   // Берём кнопку переключения предыдущего трека
let btnNext = document.querySelector(".next");   // Берём кнопку переключение следующего трека
let btnVolumeMinus = document.querySelector('#btnVolumeMinus');
let volume = document.querySelector('#volume');
let btnVolumePlus = document.querySelector('#btnVolumePlus');

volume.style.color = 'white'
audio.volume = 0.5;
    btnVolumePlus.addEventListener('click', ()=>{
    audio.volume+= 0.1;
    volume.textContent ="Громкость: " + audio.volume.toFixed(1);
    
    })
    btnVolumeMinus.addEventListener('click', ()=>{
        audio.volume-= 0.1;
        volume.textContent ="Громкость: " + audio.volume.toFixed(1);
    })


// Массив с названиями песен
let playlist = [
    'carefree-ukulele-claps-playful-positive-corporate-cheerful-music-16391.mp3',
    'childish-prank-21177.mp3',
    'chill-abstract-12099.mp3',
    'commercial-positive-energetic-motivational-happy-uplifting-inspire-music-21112.mp3',
    'cute-ukulele-funny-family-upbeat-bright-music-21127.mp3',
    'dont-you-think-lose-16073.mp3',
    'fanny-stories-main-7231.mp3',
    'far-from-home-acoustic-version-13463.mp3',
    'folk-15439.mp3',
    'happy-summer-long-10627.mp3',
    'into-the-night-20928.mp3',
    'it-is-happy-main-9622.mp3',
    'jazzy-abstract-beat-11254.mp3',
    'just-relax-11157.mp3',
    'laugh-out-loud-12611.mp3',
    'no-worries-16479.mp3',
    'in-the-forest-ambient-acoustic-guitar-instrumental-background-music-for-videos-5718.mp3',
    'penguinmusic-modern-chillout-12641.mp3',
    'positive-winter-10785.mp3',
    'relax-and-sleep-18565.mp3',
    'sexy-fashion-beats-11176.mp3',
    'the-cradle-of-your-soul-15700.mp3',
];

let treck; // Переменная с индексом трека

// Событие перед загрузкой страницы
window.onload = function() {
    treck = 0; // Присваиваем переменной ноль
}
function switchTreck (numTreck) {
    // Меняем значение атрибута src
    audio.src = '/music/' + playlist[numTreck];
    // Назначаем время песни ноль
    audio.currentTime = 0;
    // Включаем песню
    audio.play();
}
btnPlay.addEventListener("click", function() {
    audio.play(); // Запуск песни
    // Запуск интервала 
    audioPlay = setInterval(function() {
        // Получаем значение на какой секунде песня
        let audioTime = Math.round(audio.currentTime);
        // Получаем всё время песни
        let audioLength = Math.round(audio.duration)
        // Назначаем ширину элементу time
        time.style.width = (audioTime * 100) / audioLength + '%';
        // Сравниваем, на какой секунде сейчас трек и всего сколько времени длится
        // И проверяем что переменная treck меньше четырёх
        if (audioTime == audioLength && treck < 21) {
            treck++; // То Увеличиваем переменную 
            switchTreck(treck); // Меняем трек
        // Иначе проверяем тоже самое, но переменная treck больше или равна четырём
        } else if (audioTime == audioLength && treck >= 20) {
            treck = 0; // То присваиваем treck ноль
            switchTreck(treck); //Меняем трек
        }
    }, 10)
});
btnPause.addEventListener("click", function() {
    audio.pause(); // Останавливает песню
    clearInterval(audioPlay) // Останавливает интервал
});
btnPrev.addEventListener("click", function() {
    // Проверяем что переменная treck больше нуля
    if (treck > 0) {
        treck--; // Если верно, то уменьшаем переменную на один
        switchTreck(treck); // Меняем песню.
    } else { // Иначе
        treck = 20; // Присваиваем три
        switchTreck(treck); // Меняем песню
    }
});
btnNext.addEventListener("click", function() {
    // Проверяем что переменная treck больше трёх
    if (treck < 20) { // Если да, то
        treck++; // Увеличиваем её на один
        switchTreck(treck); // Меняем песню 
    } else { // Иначе
        treck = 0; // Присваиваем ей ноль
        switchTreck(treck); // Меняем песню
    }
});