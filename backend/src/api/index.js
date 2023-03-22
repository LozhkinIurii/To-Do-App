const express = require('express');
const emojis = require('./emojis');
const router = express.Router();
const tasks = require('./toDoApi');

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/emojis', emojis);
router.use('/tasks', tasks);

module.exports = router;