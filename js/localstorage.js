document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const inputs = form.querySelectorAll('input, textarea');

  // Function to save data to local storage
  function saveData() {
    const data = {};
    inputs.forEach((input) => {
      data[input.name] = input.value;
    });
    localStorage.setItem('formData', JSON.stringify(data));
  }

  // Function to load data from local storage
  function loadData() {
    const data = JSON.parse(localStorage.getItem('formData'));
    if (data) {
      inputs.forEach((input) => {
        // eslint-disable-next-line no-prototype-builtins
        if (data.hasOwnProperty(input.name)) {
          input.value = data[input.name];
        }
      });
    }
  }

  // Event listener for input changes
  inputs.forEach((input) => {
    input.addEventListener('input', saveData);
  });

  // Load data when the page is loaded
  window.addEventListener('load', loadData);
});