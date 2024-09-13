const slides = document.querySelectorAll(".slide");
let counter = 0;
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const x = document.getElementById("x");

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const prevSlide = () => {
  counter--;
  if (counter === -1) {
    counter = 4;
  }
  slideImage();
};
const nextSlide = () => {
  counter++;
  if (counter === 5) {
    counter = 0;
  }
  slideImage();
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
    if (slide.style.transform > `translateX(-${400}%)`) {
      slide.style.transform = `translateX(-${0}%)`;
    }
  });
};
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

if (x) {
  x.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
