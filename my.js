const btnQuestions = document.querySelector('#btnQuestions');
const btnPaint = document.querySelector('#btnPaint');
let btnHead = document.querySelectorAll('.btnHead');

btnQuestions.addEventListener('click', heading);

function heading(e){
    e.preventDefault();
document.querySelector('#btnContainerTwo').style.display = 'block';
document.querySelector('#btnContainerThree').style.display = 'none';
}


btnPaint.addEventListener('click', paint);

function paint(e){
    e.preventDefault();
document.querySelector('#btnContainerTwo').style.display = 'none';
document.querySelector('#btnContainerThree').style.display = 'block';
}

    btnHead.forEach((el)=> el.addEventListener('mousedown', ()=>{
        el.style.boxShadow = 'none'
    })) 
    btnHead.forEach((el)=> el.addEventListener('mouseup', ()=>{
        el.style.boxShadow = '2px 2px 4px rgb(110, 28, 28)'
    })) 

 