const button = document.querySelector('#btn');
button.addEventListener('click', showResult);

document.querySelectorAll('input').forEach((element) => {
    element.addEventListener('click', () => {
        let count = document.querySelectorAll('input:checked').length;
        if (count === 2) document.querySelector('#btn').classList.remove('disabled');
    })
});

function showResult(e){
    e.preventDefault();

    let score=0;
    
    document.querySelector('#answer1').style.backgroundColor = '#00d423';
    document.querySelector('#answer2').style.backgroundColor = '#00d423';
    
	if(document.querySelector('#answer1').checked){	
    score++;
    }
	if(document.querySelector('#answer2').checked){	
    score++;
		}
	
    document.querySelector("#result").textContent = "Ваши очки: " + score + ".";
    document.querySelector('#result').style.display = 'block'
    let answer = document.querySelectorAll('.answer');
for (let i = 0; i<answer.length; i++){
    answer[i].style.display = 'block'
}



}

let btnHead = document.querySelectorAll('#btnHead');
    btnHead.forEach((el)=> el.addEventListener('mousedown', ()=>{
        el.style.boxShadow = 'none'
    })) 



    
