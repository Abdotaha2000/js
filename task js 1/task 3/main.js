const btns = document.querySelectorAll(".btn"); 
const colors = ["red" , "green" , "yellow" , "orange" , "black" , "blue"];

btns.forEach(function(item){
    item.addEventListener("click" , addStyleAction)

})

function addStyleAction(){
    const card = this.closest(".card");
        const rand = parseInt(Math.random()*5)
        card.style.backgroundColor = colors[rand] ;
        const pare = card.querySelector("p");
        let content = parseInt(pare.textContent) ;
        pare.textContent = content +1 ;
        pare.style.color = "white";
}




// btns.forEach(function(item){
//     item.addEventListener("click", function(){
//         const card = item.closest(".card");
//         const rand = parseInt(Math.random()*5)
//         card.style.backgroundColor = colors[rand] ;
//         const pare = card.querySelector("p");
//         let content = parseInt(pare.textContent) ;
//         pare.textContent = content +1 ;
//         console.log(content);
//     });
// })



// btns[0].addEventListener("click", function(){
//     const card = btns[0].closest(".card");
//     const rand = parseInt(Math.random()*5)
//     card.style.backgroundColor = colors[rand] ;
//     const pare = card.querySelector("p");
//     let content = parseInt(pare.textContent) ;
//     pare.textContent = content +1 ;
//     console.log(content);
// });
