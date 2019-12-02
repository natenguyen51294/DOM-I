const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// NAVIGATION

const links = document.getElementsByTagName(`a`);
links[0].textContent = `Services`;
links[1].textContent = `Product`;
links[2].textContent = `Vision`;
links[3].textContent = `Features`;
links[4].textContent = `About`;
links[5].textContent = `Contact`;
Array.from(links).forEach((a) => {
  a.style.color = `green`;
})

const newLink = document.createElement(`a`);
newLink.textContent = `Home`;
newLink.style.color = `green`;

const newLinkSecond = document.createElement(`a`);
newLinkSecond.textContent = `Blog`;
newLinkSecond.style.color = `green`;

const parentElement = document.querySelector(`nav`);
parentElement.prepend(newLink);
parentElement.append(newLinkSecond);

// IMAGES

const ctaImage = document.querySelector(`#cta-img`);
ctaImage.src = `img/header-img.png`;

const middleImg = document.querySelector(`#middle-img`);
middleImg.src = `img/mid-page-accent.jpg`;

// CTA SECTION

const ctaTitle = document.querySelector(`h1`);
ctaTitle.textContent = 'DOM Is Awesome';

const button = document.querySelector(`button`);
button.textContent = `Get Started`;

// CONTENT TITLES

const contentTitle = document.querySelectorAll(`h4`);
contentTitle[0].textContent = `Features`;
contentTitle[1].textContent = `About`;
contentTitle[2].textContent = `Services`;
contentTitle[3].textContent = `Product`;
contentTitle[4].textContent = `Vision`;
contentTitle[5].textContent = `Contact`;

// CONTENT PARAGRAPH

const contentParagraph = document.getElementsByTagName(`p`);
contentParagraph[0].textContent = `Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.`;
contentParagraph[1].textContent = `About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.`;
contentParagraph[2].textContent = `Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.`;
contentParagraph[3].textContent = `Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.`;
contentParagraph[4].textContent = `Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.`;
contentParagraph[5].textContent = `123 Way 456 Street Somewhere, USA`;
contentParagraph[6].textContent = `1 (888) 888-8888`;
contentParagraph[7].textContent = `sales@greatidea.io`;
contentParagraph[8].textContent = `Copyright Great Idea! 2018`;
