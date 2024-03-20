const mainImage = document.getElementById("main-image");
const innerImage = document.querySelectorAll(".inner-image");
const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("prev");
let state = 0;

btnNext.onclick = function(){
    state = state + 1;
    if(state < innerImage.length){
        mainImage.src = innerImage[state].src ;
    }else{
        state = 0 ;
        mainImage.src = innerImage[state].src ;
    }
}

btnPrev.onclick = function(){
    state = state - 1;
    if(state >= 0){
        mainImage.src = innerImage[state].src ;
    }else{
        state = innerImage.length -1 ;
        mainImage.src = innerImage[state].src ;
    }
}

for (let i = 0; i< innerImage.length; i++){
    innerImage[i].onclick = function(){
        let imageReplacesrc = innerImage[i].src ;
    mainImage.src = imageReplacesrc ;
    };
}






// innerImage[0].onclick = function(){
//     let imageReplacesrc = innerImage[0].src ;
//     mainImage.src = imageReplacesrc ;
// };
// innerImage[1].onclick = function(){
//     let imageReplacesrc = innerImage[1].src ;
//     mainImage.src = imageReplacesrc ;
// };
// innerImage[2].onclick = function(){
//     let imageReplacesrc = innerImage[2].src ;
//     mainImage.src = imageReplacesrc ;
// };
// innerImage[3].onclick = function(){
//     let imageReplacesrc = innerImage[3].src ;
//     mainImage.src = imageReplacesrc ;
// };


// const image1 = document.getElementById("image1");
// const image2 = document.getElementById("image2");
// const image3 = document.getElementById("image3");
// const image4 = document.getElementById("image4");
// image1.onclick = function(){
//     let imageReplacesrc = image1.src ;
//     mainImage.src = imageReplacesrc ;
// };
// image2.onclick = function(){
//     let imageReplacesrc = image2.src ;
//     mainImage.src = imageReplacesrc ;
// };
// image3.onclick = function(){
//     let imageReplacesrc = image3.src ;
//     mainImage.src = imageReplacesrc ;
// };
// image4.onclick = function(){
//     let imageReplacesrc = image4.src ;
//     mainImage.src = imageReplacesrc ;
// };