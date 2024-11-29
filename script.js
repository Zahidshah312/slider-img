let currentSlide = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

function changeSlide() {
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

nextButton.addEventListener('click', () => {
    currentSlide++;
    changeSlide();
});

prevButton.addEventListener('click', () => {
    currentSlide--;
    changeSlide();
});

changeSlide();  // Initial slide

