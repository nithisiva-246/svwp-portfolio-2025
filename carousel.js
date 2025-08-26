const images = document.querySelector(".carousel-images");
const totalImages = images.children.length;
const imageWidth = 100; // vw units

// Clone first image and append for seamless loop
const firstClone = images.children[0].cloneNode(true);
images.appendChild(firstClone);

let index = 0;

function slideToIndex(i) {
  images.style.transition = "transform 0.5s ease-in-out";
  images.style.transform = `translateX(-${i * imageWidth}vw)`;
}

function resetTransition() {
  images.style.transition = "none";
  images.style.transform = `translateX(0vw)`;
  index = 0;
}

setInterval(() => {
  index++;
  slideToIndex(index);

  if (index === totalImages) {
    setTimeout(() => {
      resetTransition();
    }, 500);
  }
}, 5000);
