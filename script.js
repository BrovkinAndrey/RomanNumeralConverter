const numberInput = document.getElementById('number');
// numberInput.focus();
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

const numeralToRoman = (input) => {
  if (input === 0) return '';

  if (input >= 1000) {
    return 'M' + numeralToRoman(input - 1000);
  }
  if (input >= 900) {
    return 'CM' + numeralToRoman(input - 900);
  }
  if (input >= 500) {
    return 'D' + numeralToRoman(input - 500);
  }
  if (input >= 400) {
    return 'CD' + numeralToRoman(input - 400);
  }
  if (input >= 100) {
    return 'C' + numeralToRoman(input - 100);
  }
  if (input >= 90) {
    return 'XC' + numeralToRoman(input - 90);
  }
  if (input >= 50) {
    return 'L' + numeralToRoman(input - 50);
  }
  if (input >= 40) {
    return 'XL' + numeralToRoman(input - 40);
  }
  if (input >= 10) {
    return 'X' + numeralToRoman(input - 10);
  }
  if (input >= 9) {
    return 'IX' + numeralToRoman(input - 9);
  }
  if (input >= 5) {
    return 'V' + numeralToRoman(input - 5);
  }
  if (input >= 4) {
    return 'IV' + numeralToRoman(input - 4);
  }
  if (input >= 1) {
    return 'I' + numeralToRoman(input - 1);
  }
};

const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);

  if (!numberInput.value || isNaN(inputInt)) {
    output.textContent = 'Please enter a valid number';
    return;
  } else if (inputInt <= 0) {
    output.textContent = 'Please enter a number greater than or equal to 1';
    return;
  } else if (inputInt > 3999) {
    output.textContent = 'Please enter a number less than or equal to 3999';
    return;
  }

  output.textContent = numeralToRoman(parseInt(inputInt));
  numberInput.value = '';
  numberInput.focus();
};

convertBtn.addEventListener('click', checkUserInput);
numberInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    checkUserInput();
  }
});
