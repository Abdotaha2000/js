const counter = document.querySelector("h1");
const btnElement = document.querySelector(".btn-increase");
const btnElement2 = document.querySelector(".btn-decrease");
// const parentElement = document.querySelector(".full-content");
const colors = ["red" , "green" , "yellow" , "orange" , "black" , "blue"];
btnElement.onclick = function(){
    counter.textContent = parseInt(counter.textContent) +1 ;
    counter.parentElement.style.backgroundColor = getRandomcolor();
};
btnElement2.onclick = function(){
    if (parseInt(counter.textContent) > 0) {
        counter.textContent =  counter.textContent -1 ; 
        counter.parentElement.style.backgroundColor = getRandomcolor();
    }
};
function getRandomcolor(){
    let randomNumber = parseInt(Math.random() * 6);
    return colors[randomNumber];
}