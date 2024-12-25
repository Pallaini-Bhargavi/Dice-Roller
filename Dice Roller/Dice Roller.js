const mybutton = document.getElementById("button");
const text = document.getElementById("text");
const min = 1;
const max = 6 ;


mybutton.onclick = function(){
    const randomNum = Math.floor(Math.random() * max )+min;
    text.value = randomNum;
};