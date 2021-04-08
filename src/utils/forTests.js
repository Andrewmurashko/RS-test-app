// функция с базовым тестом на js
// function expect(value) {
//   return {
//     toBe: (exp) => {
//       if (value === exp) {
//         console.log('Success');
//       } else {
//         console.error(`Value is ${value}, but expection is ${exp}`);
//       }
//     },
//   };
// }

const sum = (a, b) => a + b;

const nativeNull = () => null;

// expect(sum(41, 1)).toBe(42);

class Lodash {
  compact(array) {
    return array.filter((el) => el && el);
  }

  groupBy(array, prop) {
    return array.reduce((acc, i) => {
      const key = typeof prop === 'function' ? prop(i) : i[prop];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(i);
      return acc;
    }, {});
  }
}

module.exports = { sum, nativeNull, Lodash };
