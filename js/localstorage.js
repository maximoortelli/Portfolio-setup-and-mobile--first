function localData() {
  const localData = {
    name: document.getElementById('savename').value,
    email: document.getElementById('saveemail').value,
    message: document.querySelector('textarea').value,
  };
  localStorage.setItem('localData', JSON.stringify(localData));
}

const Inputs = document.querySelectorAll('#form input, #form textarea');
Inputs.forEach((input) => {
  input.addEventListener('input', localData);
});

window.addEventListener('DOMContentLoaded', () => {
  let localData = localStorage.getItem('localData');
  if (localData) {
    localData = JSON.parse(localData);
    document.getElementById('savename').value = localData.name || '';
    document.getElementById('saveemail').value = localData.email || '';
    document.querySelector('textarea').value = localData.message || '';
  }
});