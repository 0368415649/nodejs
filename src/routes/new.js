const express = require('express');
const router = express.Router();
const newscontroller = require('../app/controllers/NewsController');
// [get] new/hi
router.get('/:slug', newscontroller.show);
// [get] new
router.get('/', newscontroller.index);

module.exports = router;
