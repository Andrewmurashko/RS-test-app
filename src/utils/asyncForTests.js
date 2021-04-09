const axios = require('axios');

class Ajax {
  static echo(data) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (data) {
          res(data);
        } else {
          rej(new Error('error'));
        }
      }, 150);
    });
  }

  static async get() {
    try {
      const responce = await axios.get('https://jsonplaceholder.typicode.cpm/todos');
      return responce.data;
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = Ajax;
