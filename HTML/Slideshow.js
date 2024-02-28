// JavaScript Document
// JavaScript Document
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("myslides");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    slides[slideIndex].style.display = "block";
    setTimeout(showSlides, 4000);
}

showSlides();

