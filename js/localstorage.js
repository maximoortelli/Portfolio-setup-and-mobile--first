function storeData() {
  const form = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.querySelector('textarea').value,
  };
  localStorage.setItem('form', JSON.stringify(form));
}

const formInputs = document.querySelectorAll('#survey-form input, #survey-form textarea');
formInputs.forEach((input) => {
  input.addEventListener('input', storeData);
});

window.addEventListener('DOMContentLoaded', () => {
  let form = localStorage.getItem('form');
  if (form) {
    form = JSON.parse(form);
    document.getElementById('name').value = form.name || '';
    document.getElementById('email').value = form.email || '';
    document.querySelector('textarea').value = form.message || '';
  }
});