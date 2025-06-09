// Getting elements from the DOM
const previousImage = document.querySelector(".previousImage");
const nextImage = document.querySelector(".nextImage");
const bgImages = document.querySelectorAll(".backgroundImage ul img");

let numImage = 0;
// Loop the images at first hide them all and then show the first image
function slideBackground(){
    for(let i = 0; i < bgImages.length; i++){
        bgImages[i].style.display = "none";
    }
    bgImages[numImage].style.display = "block";
}
slideBackground();
// Increases the num image when clicked and changes it
nextImage.addEventListener("click", event =>{
    if(numImage < bgImages.length - 1){
        numImage++;
    }
    else{
        numImage = 0;
    }
    slideBackground();
});
// Decreases the num image when clicked and changes it
previousImage.addEventListener("click", event =>{
    if(numImage > 0){
        numImage--;
    }
    else{
       numImage = bgImages.length -1;
    }
    slideBackground();
});