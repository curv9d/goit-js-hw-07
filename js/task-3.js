const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', () => {
  const inputValue = input.value.trim();
  if (inputValue === '') {
    output.textContent = 'Anonymous';
  } 
  else {
    output.textContent = inputValue;
  }
});