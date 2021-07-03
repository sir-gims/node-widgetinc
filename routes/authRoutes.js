const express = require('express');

const authController = require('../controllers/authController');

const router = express.Router();

// router.post('/signup', authController.signup);
// router.post('/login', authController.login);
// router.get('/logout', authController.logout);

// Protect all routes after this middleware
// router.use(authController.protect);

router
  .route('/')
//   .get(userController.getAllUsers)
  .post(authController.login);

// router
//   .route('/:id')
//   .get(userController.getUser)
//   .patch(userController.updateUser)
//   .delete(userController.deleteUser);

module.exports = router;