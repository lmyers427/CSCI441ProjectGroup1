const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
// const rolesList = require('../config/roles_list');
// const verifyRoles = require('../middleware/verifyRoles');

router.route('/')
    .post(bookController.createNewBook)
    //.get(bookController.getAllBooks)
    //.post(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), bookController.createNewBook)
    //.put(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), bookController.updateBook)
    //.delete(verifyRoles(ROLES_LIST.Admin), bookController.deleteBook);


module.exports = router;