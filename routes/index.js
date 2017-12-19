var express = require('express');
var router = express.Router();
var Themas = require('../models/themas').Themas;

/* GET home page. */
router.get('/:id?', function(req, res, next) {
	if(req.params.id){
		var indx = req.params.id;
	}
	else{
		var indx = 'index';
	}
	 Themas.findOne({'url':indx}, function(err, ttext){
		if(!ttext){
			ttext = {
			 name:'Добро пожаловать на сайт',
			 body:'Извините, страница не найдена'
			 }
			} 
	console.log(index);
  res.render('index', { ttext: ttext,});
});
router.post('/reg', function(req,res,next){
	console.log(req.body.name);
	console.log(req.body.pass);
	res.redirect('/');
});
});





router.get('/add/:url/:name/:body?', function(req, res, next) {
  if(req.params.name ){
	  var p_name = req.params.name;
  }
  else{
	  var p_name = 'default3';
  }
  if(req.params.body ){
	  var p_body = req.params.body;
  }
  else{
	  var p_body = 'default3';
  }
  if(req.params.url ){
	  var p_url = req.params.url;
  }
  else{
	  var p_url = 'default3';
  }
  var themas = new Themas({
	  name: p_name,
	  body: p_body,
	  url: p_url,
  });
  themas.save(function(err, user, affected){
	  console.log("OK");
  });
});

module.exports = router;





























