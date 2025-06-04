// Modal

function openModal() {
    document.getElementById("modal").style.top = "0px";
}

function closeModal() {
    document.getElementById("modal").style.top = "-400px";
}

// Links

const navLink = document.querySelectorAll(".nav-link");

for (const link of navLink) {
link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
e.preventDefault();
const href = this.getAttribute("href");

document.querySelector(href).scrollIntoView({
    behavior: "smooth"
});
}

// Reviews

const scrollContainer = document.getElementById("scroll-container");
const btnLeft = document.getElementById("scroll-left");
const btnRight = document.getElementById("scroll-right");

function getScrollStep() {
  const item = scrollContainer.querySelector(".item");
  const style = getComputedStyle(item);
  const gap = parseInt(style.marginRight || 0) || 10; // fallback
  return item.offsetWidth + gap;
}

btnLeft.addEventListener("click", () => {
  scrollContainer.scrollLeft -= getScrollStep();
});

btnRight.addEventListener("click", () => {
  scrollContainer.scrollLeft += getScrollStep();
});

// Form

let formOne = document.querySelector('.form-one');
let formPolis = document.querySelector('.polis-ordering-form');
let message = document.querySelector('.subscription-message');
let message2 = document.querySelector('.subscription-message2');

formOne.onsubmit = function(evt) {
    evt.preventDefault();
    message.textContent = 'Спасибо за заявку! Мы скоро свяжемся с вами!';
};

formPolis.onsubmit = function(evt) {
    evt.preventDefault();
    message2.textContent = 'Спасибо за заявку! Мы скоро свяжемся с вами!';
};