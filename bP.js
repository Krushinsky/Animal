const start = document.querySelector('#start');
const pause = document.querySelector('#pause');



start.addEventListener('click', calculateTimes);
function calculateTimes(){
    pause.classList.remove('disabled')
    let timer = document.querySelector('#inputTime');
    let amountTime = timer.value *60;
    timer.style.display = 'none'

    function calculateTime() {
        
        let countdown = document.querySelector('#countdown');
        let minutes = Math.floor(amountTime/60);
        let seconds = amountTime%60;
        if(seconds<10){
            seconds = '0' + seconds;
        }
        countdown.textContent = `${minutes} : ${seconds}`; 
        amountTime --
        if (amountTime < 0){
            stopTimer()
            amountTime = 0;
            Swal.fire({
                title: 'Время вышло!',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
        }
        function stopTimer(){
            clearInterval(timerId)
        }
    
    
    }
    let timerId = setInterval(calculateTime, 1000);
    let video = document.querySelector('#myVideo');
    video.play();
    start.style.display = 'none'
}

pause.addEventListener('click', pauseVideo);
function pauseVideo(){
    let video = document.querySelector('#myVideo');
    if (video.paused) {
        video.play();
        pause.textContent = 'Пауза';
        pause.style.boxShadow = '2px 2px 2px rgb(28, 36, 110)';
        pause.style.fontSize = '27px';
    }
    else {
        video.pause();
        pause.textContent = 'Продолжить';
        pause.style.boxShadow = '2px 2px 2px rgb(28, 36, 110)';
        pause.style.fontSize = '27px';
    }
    
    }

let btnHead = document.querySelectorAll('#btnHead');
    btnHead.forEach((el)=> el.addEventListener('mousedown', ()=>{
        el.style.boxShadow = 'none'

    })) 
start.addEventListener('mousedown', ()=>{
    start.style.boxShadow = 'none'})
    let btnPauseV = document.querySelector('#pause');
    start.addEventListener('mouseup', ()=>{
        btnPauseV.style.boxShadow = '2px 2px 2px rgb(28, 36, 110)'})
        btnPauseV.addEventListener('mousedown', ()=>{
    btnPauseV.style.boxShadow = 'none'})