const express = require('express');
const router = express.Router();
const path = require('path');
const bookController = require('../controllers/bookController');

router.route('/')
.get(bookController.getBooks);

module.exports = router;