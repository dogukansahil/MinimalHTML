const toggleButton = document.getElementById('toggle-theme');
const body = document.body;

document.addEventListener('DOMContentLoaded', function () {
  const cachedMode = localStorage.getItem('themeMode');
  if (cachedMode === 'dark') {
    body.classList.add('dark-mode');
    updateButton();
  }
});

toggleButton.addEventListener('click', function (event) {
  event.preventDefault();
  body.classList.toggle('dark-mode');
  updateButton();

  const currentMode = body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('themeMode', currentMode);
});

function updateButton() {
  if (body.classList.contains('dark-mode')) {
    toggleButton.textContent = '☀️';
  } else {
    toggleButton.textContent = '🌙';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const yearElement = document.getElementById('footer-year');
  const currentYear = new Date().getFullYear();
  const linkUrl = 'https://dogukansahil.dev/';
  const linkText = '👨🏽‍💻';
  yearElement.innerHTML += ` <a href="${linkUrl}" target="_blank">${linkText}</a> ${currentYear}<br> All Rights Reserved.`;
});

document.addEventListener('contextmenu', function (event) {
  event.preventDefault();
});

var container = document.querySelector('.image-container');
var image = document.querySelector('img');
var initialScale = 1;

container.addEventListener('mouseenter', function () {
  initialScale = getComputedStyle(image).getPropertyValue('transform');
  image.style.transform = 'scale(1.2)';
});

container.addEventListener('mouseleave', function () {
  image.style.transform = initialScale;
});

window.addEventListener('pageshow', function (event) {
  if (event.persisted) {
    location.reload();
  }
});

var metaTag = document.createElement('meta');
metaTag.setAttribute('http-equiv', 'cache-control');
metaTag.setAttribute('content', 'no-store');
document.head.appendChild(metaTag);

window.addEventListener('beforeunload', function () {
  navigator.sendBeacon('/prevent-cache', '');
});
