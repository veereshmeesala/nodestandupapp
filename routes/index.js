var express = require('express');
var router = express.Router();
var standupCtrl = require('../controllers/standup.server.controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// get a new note page
router.get('/newnote', function(req, res, next){
	return standupCtrl.getNote(res, req);
});


// post a new note page
router.post('/newnote', function(req, res, next){
	return standupCtrl.create(req, res);
});

module.exports = router;



