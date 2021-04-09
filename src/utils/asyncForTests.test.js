const Ajax = require('./asyncForTests');
const axios = require('axios');

jest.mock('axios'); //замокал модуль axios

describe('Ajax: echo', () => {
  //в describe описывается то, что мы тестируем
  test('should return value async', async () => {
    //в test описывается то, что должна вернуть ф-ция
    const data = 'some data';
    const result = await Ajax.echo(data);
    expect(result).toBe(data);
  });

  //способ без async await
  test('should return value with promise', () => {
    //в test описывается то, что должна вернуть ф-ция
    const data = 'some data';
    return Ajax.echo(data).then((res) => {
      expect(res).toBe(data);
    });
  });

  //обработка ошибок
  test('should catch error with promise', async () => {
    //в test описывается то, что должна вернуть ф-ция
    const data = 'some data';
    try {
      await Ajax.echo();
    } catch (e) {
      expect(e.message).toBe('error');
    }
  });

  //обработка ошибок без async await
  test('should catch error with promise', () => {
    //в test описывается то, что должна вернуть ф-ция
    const data = 'some data';
    return Ajax.echo(data).catch((err) => {
      expect(err).toBeInstanceOf(Error);
    });
  });
});

//тест axios
describe('Axios: GET', () => {
  let responce;
  let todos;

  beforeEach(() => {
    todos = [{ id: 1, title: 'Todo 1', completed: false }];
    responce = {
      data: {
        todos,
      },
    };
  });

  test('should return data from backend', () => {
    axios.get.mockReturnValue(responce);

    return Ajax.get().then((data) => {
      expect(data.todos).toEqual(todos);
    });
  });
});
