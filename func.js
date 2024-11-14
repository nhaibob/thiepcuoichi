const weddingDate = new Date("2024-12-18T00:00:00").getTime();
const countdownElement = document.getElementById('countdown');
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = minutes;
    secondsElement.innerHTML = seconds;

    if (distance < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "Đám cưới đã bắt đầu!";
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);

// Slider
const slides = document.querySelector('.slides');
const prevSlideButton = document.getElementById('prevSlide');
const nextSlideButton = document.getElementById('nextSlide');
let index = 0;

function showSlide(index) {
    slides.style.transform = `translateX(${-index * 100}%)`;
}

function showNextSlide() {
    index++;
    if (index >= slides.children.length) {
        index = 0;
    }
    showSlide(index);
}

function showPrevSlide() {
    index--;
    if (index < 0) {
        index = slides.children.length - 1;
    }
    showSlide(index);
}

nextSlideButton.addEventListener('click', showNextSlide);
prevSlideButton.addEventListener('click', showPrevSlide);

setInterval(showNextSlide, 3000);