const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));
const radios = document.querySelectorAll('input[type="radio"]');
const resultado = document.getElementById('nota');

radios.forEach(radio => {
  radio.addEventListener('change', () => {
    resultado.textContent = radio.value;
  });
});
