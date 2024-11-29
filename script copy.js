let slideIndex = 0;

 function moveSlide(n) {
  const slides = document.querySelectorAll('.slider img');
 const totalSlides = slides.length;

  slideIndex += n;

   // Wrap around if the index is out of bounds
   if (slideIndex >= totalSlides) {
     slideIndex = 0;
   } else if (slideIndex < 0) {
     slideIndex = totalSlides - 1;
   }

   // Move the slider using translateX
  const slider = document.querySelector('.slider');
   const slideWidth = slides[0].clientWidth;
   slider.style.transform = `translateX(${-slideWidth * slideIndex}px)`; // Slide images horizontally
 }

/ Initialize the slider to show the first image
 moveSlide(3
 );
