var express = require('express');
var router = express.Router();

// GET API LISTENING

router.get('/', (req, res) => {
  res.send('api works');
});

module.exports = router;
