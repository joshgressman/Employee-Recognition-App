var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');

var Award = require('../../schema/award');

router.get('/', function (req, res){
  console.log('Getting awards');
  Award.find({}, function(err, data){
    if (err) {
    console.log("Couldnt get awards " , err);
    res.sendStatus(500);
  } else {
    console.log('queried all awards');
    res.send(data);
  }
  });
});



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
