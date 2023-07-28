document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  const emailInput = form.querySelector('input[type="email"]');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (emailInput.value.toLowerCase() !== emailInput.value) {
      const errorMessage = document.createElement('div');
      errorMessage.classList.add('error-message');

      const errorMessageContent = document.createElement('div');
      errorMessageContent.classList.add('error-message-content');

      const errorMessageText = document.createElement('span');
      errorMessageText.classList.add('error-message-text');
      errorMessageText.textContent = 'Please enter the email in lowercase.';

      const errorMessageClose = document.createElement('span');
      errorMessageClose.classList.add('error-message-close');
      errorMessageClose.textContent = 'X';

      errorMessageClose.addEventListener('click', () => {
        errorMessage.remove();
      });

      errorMessageContent.appendChild(errorMessageText);
      errorMessageContent.appendChild(errorMessageClose);
      errorMessage.appendChild(errorMessageContent);
      form.appendChild(errorMessage);
    } else {
      form.submit();
    }
  });
});