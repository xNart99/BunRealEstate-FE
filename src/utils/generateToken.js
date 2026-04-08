export const generateToken = (length) => {
  let char =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
  let randomChar = [];

  for (var i = 0; i < length; i++) {
    let sufferChar = (Math.random() * (char.length - 1)).toFixed(0);
    randomChar[i] = char[sufferChar];
  }

  return randomChar.join("");
};
