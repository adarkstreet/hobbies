var express = require('express');
var router = express.Router();
var Hobby = require('../models').Hobby;

/* GET movie listings. */
router.get('/', function(req, res, next)  {
  Hobby.all()
    .then( function(hobbies) {
      return res.render('hobbies', { hobbies: hobbies });
  })
});

/* POST add movie listing */
router.post('/', function(req, res, next) {
  var title = req.body.title;
  Hobby.create({ title: title })
    .then( function() {
      res.redirect('/hobbies');
  });
});

module.exports = router;