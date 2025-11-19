const images = document.querySelectorAll(".carousel-images img");
let index = 0;
let interval = 3000;
const totalImages = images.length;

function showImage(nextIndex) {
  if (nextIndex === index) return; // no change
  images[index].style.opacity = 1; // ensure current is fully visible
  images[nextIndex].style.opacity = 0; // prepare next as invisible
  images[nextIndex].classList.add("active");

  // fade out current
  images[index].style.transition = "opacity 1s ease-in-out";
  images[index].style.opacity = 0;

  // fade in next with a small delay
  setTimeout(() => {
    images[nextIndex].style.transition = "opacity 1s ease-in-out";
    images[nextIndex].style.opacity = 1;
  }, 50);

  // after fade completes, remove active from old and update index
  setTimeout(() => {
    images[index].classList.remove("active");
    index = nextIndex;
  }, 1050);
}

function nextImage() {
  let nextIndex = (index + 1) % totalImages;
  showImage(nextIndex);
}

showImage(index);
nextImage(); // show first transition after initial display
let intervalId = setInterval(nextImage, interval);

const carousel = document.querySelector(".carousel");
carousel.addEventListener("mouseenter", () => clearInterval(intervalId));
carousel.addEventListener("mouseleave", () => {
  intervalId = setInterval(nextImage, interval);
});
