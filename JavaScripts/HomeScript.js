document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const cardContents = document.querySelectorAll(".card-content");
  const dotsContainer = document.querySelector(".slideshow-dots");
  let currentSlide = 0;
  const slideInterval = 5000; // 5 seconds per slide

  // Create dots
  slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      goToSlide(index);
    });
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dot");

  function goToSlide(index) {
    // Fade out current slide/card
    slides[currentSlide].classList.remove('active');
    cardContents[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    // Update current slide
    currentSlide = index;
    
    // Fade in new slide/card
    slides[currentSlide].classList.add('active');
    cardContents[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

  function nextSlide() {
    // slides[currentSlide].classList.remove("active");
    // cardContents[currentSlide].classList.remove("active");

    // currentSlide = (currentSlide + 1) % slides.length; 

    // slides[currentSlide].classList.add("active");
    // cardContents[currentSlide].classList.add("active");

    const nextSlideIndex = (currentSlide + 1) % slides.length;
    goToSlide(nextSlideIndex);
  }

  // Start slideshow (and ensure first slide is visible initially)
  slides[0].classList.add("active");
  cardContents[0].classList.add("active");
  setInterval(nextSlide, slideInterval);


  let isScrolling = false;
let scrollTimeout;

window.addEventListener('wheel', (e) => {
    if (isScrolling) return;
    
    isScrolling = true;
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        isScrolling = false;
    }, 1000); // Prevent rapid scrolling
    
    if (e.deltaY > 0) {
        // Scrolling down - go to next slide
        nextSlide();
    } else {
        // Scrolling up - go to previous slide
        const prevSlideIndex = (currentSlide - 1 + slides.length) % slides.length;
        goToSlide(prevSlideIndex);
    }
    
    e.preventDefault();
}, { passive: false });
});
