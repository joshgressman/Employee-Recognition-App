var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');

var Award = require('../../schema/award');

router.post('/', function (req, res, next){
  console.log(req.body);
  var award = new Award({
    title: req.body.title,
    description: req.body.description,
    cost: req.body.cost,
  });
  award.save(function(err, result){
    if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'employee created',
            obj: result
        });
  });
});


// router.get('/', (req, res) => {
//   res.send('award works');
// });



module.exports = router;
