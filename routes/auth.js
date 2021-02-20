const express = require('express');
const authController = require('../controllers/auth');
const router = new express.Router();

router.post('/login', function (req, res, next) {
  authController.login(req, res);
});

module.exports = router;