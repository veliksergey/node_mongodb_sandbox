const express = require('express');
const router = express.Router();
const SharksCtrl = require('../controllers/sharks');

router.get('/', SharksCtrl.list);
router.post('/', SharksCtrl.create);

module.exports = router;
