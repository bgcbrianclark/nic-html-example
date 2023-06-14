function showHidePurchased() {
  const purchasedScreen = document.querySelector('#purchased');
  if (purchasedScreen.classList.contains('active')) {
    purchasedScreen.classList.remove('active');
  } else {
    purchasedScreen.classList.add('active');
  }
}
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', function() {
    console.log('working')
    showHidePurchased();
  })
})
function submitForm(form) {
  const parent = form.parentNode
  parent.innerHTML = `
    <h2>Thank You!</h2>
    <p>We will respond to your inquiry as soon as possible.</p>
  `
}
const form = document.querySelector('#contactForm')
form.addEventListener('submit', function (e) {
  e.preventDefault();
  submitForm(form);
});