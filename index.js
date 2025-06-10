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

function slideImage(){
    // Changes the image every 4 seconds automatically
    setInterval(() =>{
        slideToNextImage();
    }, 4000);
    // Changes the images when the icon is clicked
    nextImage.addEventListener("click", () =>{
        slideToNextImage();
    });
}
// Increases the num image when clicked and chages the image
function slideToNextImage(){
    if(numImage < bgImages.length - 1){
        numImage++;
    }
    else{
        numImage = 0;
    }
    slideBackground();
}

slideImage();

// Decreases the num image when clicked and changes image
previousImage.addEventListener("click", event =>{
    if(numImage > 0){
        numImage--;
    }
    else{
       numImage = bgImages.length -1;
    }
    slideBackground();
});


const logo = document.getElementById("logo");
// Reloads the page when the logo is clicked
logo.addEventListener("click", () =>{
    location.reload();
});