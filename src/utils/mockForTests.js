function map(array, callBack) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callBack(array[i]));
  }
  return result;
}

module.exports = { map };
