const express = require('express');
const router = express.Router();
const sitecontroller = require('../app/controllers/siteController');
//[get] /search
router.get('/search', sitecontroller.show);
//[get] /
router.get('/', sitecontroller.index);

module.exports = router;
