const User = require('../models/User');

module.exports = {
  login (req, res) {
    try {
      const { email, password } = req.body;
      const user = User.findUser(email);
      const emailError = !!user.length;
      const passwordError = Number(user.password) === Number(password);
      const response = {
        email,
        userName: user.userName || '',
        emailError,
        passwordError,
      }
      res.json(response);
    } catch (error) {
      console.log(error)
    }
  },
};
