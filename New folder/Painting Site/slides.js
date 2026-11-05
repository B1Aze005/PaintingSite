//Code for the sides under the canvas
window.addEventListener("load", setupSlides);
const slideButton = document.getElementById("addSlide");
const slideShow = document.getElementById("slides");
slideButton.addEventListener("click", addSlide);


let slideFiles = ["black.jpg", "black.jpg", "black.jpg"];

function setupSlides(){
    for(let i = 0; i< slideFiles.length; i++){
        let image = document.createElement("img");
        image.src = slideFiles[i];
        slideShow.appendChild(image);
    }
}

function addSlide(){
    let num = window.prompt('Pick Slide to change/add');
    num -= 1;

    const imageLink = document.createElement("a");
    imageLink.download = `paintingSite-${Date.now()}-.png`;
    imageLink.href = board.toDataURL("image/png");
    slideFiles[num] = imageLink.href;

    let currentSlides = document.getElementsByTagName("img");
    for (let i = currentSlides.length - 1; i >= 0; i--){
        currentSlides[i].remove();
    }
    setupSlides();

}