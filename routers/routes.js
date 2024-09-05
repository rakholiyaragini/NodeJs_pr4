const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller.js');

router.get('/', controller.defaultController);
router.post('/add', controller.addController);
router.get('/edit/:id', controller.editController);
router.post('/update/:id', controller.updateController);
router.get('/delete/:id', controller.deleteController);

module.exports = router; 