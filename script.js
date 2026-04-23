// script.js
const cardsContainer = document.querySelector('.cards');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 0;

function updateSlide(){
    cardsContainer.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    if(index < 1){
        index++;
        updateSlide();
    }
});

prevBtn.addEventListener('click', () => {
    if(index > 0){
        index--;
        updateSlide();
    }
});