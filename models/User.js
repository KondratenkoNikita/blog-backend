const pool = require('../db');

module.exports = {
  findUser (email) {
  const row = pool.query(
    'SELECT * FROM users WHERE email = $1',
    [email]
  );

  return row;
  }
};

