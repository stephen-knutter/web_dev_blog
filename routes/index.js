var express = require('express');
var router = express.Router();
var query = require('../database/query');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Z Blog'});
});

module.exports = router;
