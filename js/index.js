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
links[0].textContent = siteContent["nav"]["nav-item-1"];
links[1].textContent = siteContent["nav"]["nav-item-2"];
links[2].textContent = siteContent["nav"]["nav-item-3"];
links[3].textContent = siteContent["nav"]["nav-item-4"];
links[4].textContent = siteContent["nav"]["nav-item-5"];
links[5].textContent = siteContent["nav"]["nav-item-6"];
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
ctaImage.src = siteContent["cta"]["img-src"];

const middleImg = document.querySelector(`#middle-img`);
middleImg.src = siteContent["main-content"]["middle-img-src"];

// CTA SECTION

const ctaTitle = document.querySelector(`h1`);
ctaTitle.textContent = siteContent["cta"]["h1"];

const button = document.querySelector(`button`);
button.textContent = siteContent["cta"]["button"];

// CONTENT TITLES

const contentTitle = document.querySelectorAll(`h4`);
contentTitle[0].textContent = siteContent["main-content"]["features-h4"];
contentTitle[1].textContent = siteContent["main-content"]["about-h4"];
contentTitle[2].textContent = siteContent["main-content"]["services-h4"];
contentTitle[3].textContent = siteContent["main-content"]["product-h4"];
contentTitle[4].textContent = siteContent["main-content"]["vision-h4"];
contentTitle[5].textContent = siteContent["contact"]["contact-h4"];

// CONTENT PARAGRAPH

const contentParagraph = document.getElementsByTagName(`p`);
contentParagraph[0].textContent = siteContent["main-content"]["features-content"];
contentParagraph[1].textContent = siteContent["main-content"]["about-content"];
contentParagraph[2].textContent = siteContent["main-content"]["services-content"];
contentParagraph[3].textContent = siteContent["main-content"]["product-content"];
contentParagraph[4].textContent = siteContent["main-content"]["vision-content"];
contentParagraph[5].textContent = siteContent["contact"]["address"];
contentParagraph[6].textContent = siteContent["contact"]["phone"];
contentParagraph[7].textContent = siteContent["contact"]["email"];
contentParagraph[8].textContent = siteContent["footer"]["copyright"];
