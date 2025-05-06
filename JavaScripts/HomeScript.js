document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const cardContents = document.querySelectorAll('.card-content');
    let currentSlide = 0;
    const slideInterval = 5000; // 5 seconds per slide
  
    function nextSlide() {
      // Fade out current slide/card
      slides[currentSlide].classList.remove('active');
      cardContents[currentSlide].classList.remove('active');
      
      // Move to next slide (loop back to 0 if at end)
      currentSlide = (currentSlide + 1) % slides.length; // Handles 4+ slides
      
      // Fade in new slide/card
      slides[currentSlide].classList.add('active');
      cardContents[currentSlide].classList.add('active');
    }
  
    // Start slideshow (and ensure first slide is visible initially)
    slides[0].classList.add('active');
    cardContents[0].classList.add('active');
    setInterval(nextSlide, slideInterval);
  });