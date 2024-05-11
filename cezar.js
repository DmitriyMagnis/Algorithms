const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const solution = (inputString, shift = 0) => {
  if (shift > alphabet.length) return 'wrong long';
  if (!inputString.length) return 'wrong input';

  let outputString = '';

  for (let i = 0; i < inputString.split('').length; i++) {
    const findAlphIndex = alphabet.indexOf(inputString[i].toUpperCase());

    outputString += alphabet[findAlphIndex + shift]
      ? alphabet[findAlphIndex + shift]
      : alphabet[findAlphIndex + shift - alphabet.length];
  }
  return outputString;
};

// console.log(solution('ABCD', 26));
// console.log(solution('ABCD', 55));
// console.log(solution('Mike', 2));
// console.log(solution('', 4));
// solution('Mike', 26);
// solution('Ellie', 55);
// solution('', 55);
