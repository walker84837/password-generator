function getRandomIndex(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generatePassword() {
  let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  let uppercaseLetters = lowercaseLetters.toUpperCase();
  let numbers = "0123456789";

  let password = "";

  // Generate 6 lowercase letters
  for (let i = 0; i < 6; i++) {
    password += lowercaseLetters.charAt(getRandomIndex(0, lowercaseLetters.length));
  }

  // Generate a number
  password += numbers.charAt(getRandomIndex(0, numbers.length));

  // Generate 9 more lowercase letters
  for (let i = 0; i < 9; i++) {
    password += lowercaseLetters.charAt(getRandomIndex(0, lowercaseLetters.length));
  }

  // Generate 6 more lowercase letters
  for (let i = 0; i < 6; i++) {
    password += lowercaseLetters.charAt(getRandomIndex(0, lowercaseLetters.length));
  }

  // Generate random position for uppercase letter
  let uppercaseIndex = getRandomIndex(0, password.length + 1);

  // Insert uppercase letter at the random position
  password =
    password.slice(0, uppercaseIndex) +
    uppercaseLetters.charAt(getRandomIndex(0, uppercaseLetters.length)) +
    password.slice(uppercaseIndex);

  // Insert dashes at specific positions
  password =
    password.slice(0, 6) +
    "-" +
    password.slice(6, 13) +
    "-" +
    password.slice(13, 20);

  document.getElementById("password").value = password;
}
