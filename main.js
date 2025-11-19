window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {
    if (window.scrollY < 10) {
        header.classList.add("hide");
        header.classList.remove("sticky");
        header.classList.remove("show");
    } else if (window.scrollY > 500) {
        header.classList.add("sticky");
    } else {
        header.classList.add("hide");  
    }
  } else if (window.scrollY == 0) {
    header.classList.add("show");
    header.classList.remove("sticky");
  }
});


fetch('header.html')
  .then(resp => resp.text())
  .then(html => {
    document.getElementById('header').innerHTML = html;
});

function openContactUsForm() {
  window.location.href = 'contact-us.html';
}

fetch('footer.html')
  .then(resp => resp.text())
  .then(html => {
    document.getElementById('footer').innerHTML = html;
});

