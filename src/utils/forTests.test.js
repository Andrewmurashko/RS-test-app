// import { sum } from './forTests';

const { sum, nativeNull, Lodash } = require('./forTests');

describe('Sum function:', () => {
  test('should return sum of two values', () => {
    expect(sum(1, 3)).toBe(4); // macher
    expect(sum(1, 3)).toEqual(4); //toEqual почти тоже самое, что и toBe
  });

  test('should return value correctly comparing to other', () => {
    expect(sum(2, 3)).toBeGreaterThan(4);
    expect(sum(2, 3)).toBeGreaterThanOrEqual(5);
    expect(sum(2, 3)).toBeLessThan(10);
    expect(sum(2, 3)).toBeLessThanOrEqual(5);
  });

  test('should sum 2 float values correctly', () => {
    expect(sum(0.2, 0.1)).toBeCloseTo(0.3);
  });
});

describe('Native null function:', () => {
  test('should return falsy value null', () => {
    expect(nativeNull()).toBe(null);
    expect(nativeNull()).toBeNull();
    expect(nativeNull()).toBeFalsy();
    expect(nativeNull()).toBeDefined();
    expect(nativeNull()).not.toBeTruthy();
    expect(nativeNull()).not.toBeUndefined();
  });
});

let _ = new Lodash();

describe('Lodash compact:', () => {
  let array;

  beforeEach(() => {
    array = [false, 42, 0, '', true, null, 'hello'];
  }); // beforeEach это хук, запускающийся перед каждым тестом
  beforeAll(() => {
    _ = new Lodash();
  }); // это хук, запускающийся один раз перед запуском тестов
  afterAll(() => {}); // -//- после всех тестов
  afterEach(() => {}); // -//- после каждого теста

  test('should be defined', () => {
    expect(_.compact).toBeDefined();
    expect(_.compact).not.toBeUndefined();
  });

  test('should remove falsy values from array', () => {
    const result = [42, true, 'hello'];
    expect(_.compact(array)).toEqual(result); //toBe используется для примитивов, toEqual для объектов
  });

  test('should NOT contain falsy values', () => {
    expect(_.compact(array)).not.toContain(false);
    expect(_.compact(array)).not.toContain('');
    expect(_.compact(array)).not.toContain(null);
    expect(_.compact(array)).not.toContain(0);
  });
});

describe('Lodash: groupBy', () => {
  test('should be defined', () => {
    expect(_.groupBy).toBeDefined();
    expect(_.groupBy).not.toBeUndefined();
  });

  test('should group array items by Math.floor', () => {
    const array = [2.2, 2.4, 4.2, 3.1];
    const result = {
      2: [2.2, 2.4],
      4: [4.2],
      3: [3.1],
    };
    expect(_.groupBy(array, Math.floor)).toEqual(result);
  });

  test('should group array items by length', () => {
    const array = ['one', 'two', 'three'];
    const result = {
      5: ['three'],
      3: ['one', 'two'],
    };
    expect(_.groupBy(array, 'length')).toEqual(result);
  });

  test('should NOT return array', ()=> {
      expect(_.groupBy([],Math.trunc)).not.toBeInstanceOf(Array)
  })
});
