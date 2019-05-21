let express = require('express');
let router = express.Router();
let db = require('../models');
let helper = require('../helpers/todo');

router.route('/')
    .get(helper.getItems)
    .post(helper.createItem);

router.route('/:todoId')
    .get(helper.getOneItem)
    .put(helper.updateOneItem)
    .delete(helper.deleteOneItem);

module.exports = router;