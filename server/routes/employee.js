var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var Employee = require('../../schema/employee');


router.post('/', function (req, res, next){
  console.log(req.body);
  var employee = new Employee({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    company: req.body.company,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    points: req.body.points
    // rewards: req.body.rewards
  });
  employee.save(function(err, result){
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

module.exports = router;
