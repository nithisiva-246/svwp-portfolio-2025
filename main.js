window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const logo = header.querySelector("img.logo");
  let defLogo = "assests/images/logo2_white.png";
  if (window.scrollY > 0) {
    logo.src = defLogo;
    if (window.scrollY < 10) {
        header.classList.add("hide");
        header.classList.remove("sticky");
        header.classList.remove("show");
    } else if (window.scrollY > 500) {
        header.classList.add("sticky");
        logo.src = "assests/images/logo2_black.png";
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

fetch('assests/data/products.json')
  .then(response => response.json())
  .then(products => {
    const prodList = document.getElementById('prodList');
    if(prodList === null) return;
    products.forEach(product => {
      const article = document.createElement('article');
      article.className = 'prod-card';
      article.innerHTML = `
        <img src="${product.image}" alt="${product.alt}" />
        <div class="prod-info">
          <h2>${product.title}</h2>
          <p>${product.description}</p>
        </div>
      `;
      prodList.appendChild(article);
    });
  })
  .catch(err => {
    document.getElementById('prodList').innerHTML = '<p>Failed to load products.</p>';
    console.error('Error loading products.json:', err);
  });


fetch('assests/data/products.json')
  .then(response => response.json())
  .then(products => {
    const prodList = document.getElementById('homeProdList');
    if(prodList === null) return;
    products.slice(0,4).forEach(product => {
      const article = document.createElement('article');
      article.className = 'product-card';
      article.innerHTML = `
        <img src="${product.image}" alt="${product.alt}" />
          <h2>${product.title}</h2>
          <p>${product.description}</p>
      `;
      prodList.appendChild(article);
    });
  })
  .catch(err => {
    document.getElementById('homeProdList').innerHTML = '<p>Failed to load home products.</p>';
});

