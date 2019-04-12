function newArray(arr) {
  return arr.filter(num => num > 5)
    .map(num2 => `Wow, ${num2} is big!`);
}

module.exports = {
  newArray
};
