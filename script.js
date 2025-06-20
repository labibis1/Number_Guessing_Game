
let p1Input = document.querySelector('.player1_input');
let p1Btn = document.querySelector('.player1_btn');
let p2Input = document.querySelector('.player2_input');
let p2Btn = document.querySelector('.player2_btn');
let error = document.querySelector ('.error')
let box1 = document.querySelector('.box1')
let box2 = document.querySelector('.box2')

let resultBtn = document.querySelector('.result')
let resultTxt = document.querySelector('.result_txt')

// let attempt = 5;
let conclusion = document.querySelector('.marq_banner')

p1Btn.addEventListener('click', function(){

    if (p1Input.value == ""){
        error.innerHTML ='INPUT  VALUE  IS  REQUIRED'
    }else if(p1Input.value >= 100){
        error.innerHTML = 'Please Write less then 100'
    }else{
        error.innerHTML = ""
        box1.style.display = 'none'
        box2.style.display = 'block'
    }   
    console.log(p1Input.value)
}) 



p2Btn.addEventListener('click', function(){

    if (p2Input.value == ""){
        error.innerHTML = 'Input a Value for Player 2'
    }else if (p2Input.value >= 100){
        error.innerHTML = 'Input value less then 100'
    }else{
        error.innerHTML = ''
        box2.style.display = 'none'
        resultBtn.style.display = 'block'
    }
    console.log(p2Input.value)
    console.log(attempt--)

})



resultBtn.addEventListener('click', function(){
    if (p1Input.value == p2Input.value){
        resultTxt.innerHTML = 'Match Draw Hoise';
        conclusion.innerHTML = 'Thanks For Playing';

    }else if(p1Input.value>p2Input.value){
        resultTxt.innerHTML = 'Player 1 Winner'
        conclusion.innerHTML = 'Thanks For Playing';

    }else 
    resultTxt.innerHTML = 'Player 2 winner'
    marq_banner.innerHTML = 'Thanks For Playing';
    conclusion.style.display = 'none'

})
