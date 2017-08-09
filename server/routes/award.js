var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var Award = require('../../schema/award');




router.get('/', (req, res) => {
  res.send('award works');
});



module.exports = router;
