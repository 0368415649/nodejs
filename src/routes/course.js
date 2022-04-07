const express = require('express');
const router = express.Router();
const slugcontroller = require('../app/controllers/slugController');
const createcontroller = require('../app/controllers/createController');



router.post('/create', createcontroller.createData);

router.get('/create', createcontroller.create);

router.get('/show/delete/:id', createcontroller.destroy);

router.put('/show/:id', createcontroller.update_change);

router.get('/show/:id', createcontroller.update);

router.get('/show', createcontroller.show);

router.get('/:slug', slugcontroller.show);

module.exports = router;
