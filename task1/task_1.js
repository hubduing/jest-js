function reverseString(str) {
  let str2 = str.split('').reverse().join('');
  console.log(str2);
  return str2;
}
module.exports = reverseString;