const express = require('express');
const router = express.Router();
const ConversationsCtrl = require('../controllers/conversations');

router.get('/', ConversationsCtrl.list);
router.post('/', ConversationsCtrl.create);

module.exports = router;
