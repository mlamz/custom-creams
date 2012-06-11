var express = require('express')
,	port = process.env.PORT || 3000
,	twitter = require('ntwitter');

var app = express.createServer();

app.configure(function() {
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(__dirname + '/public'));
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
});

var twit = new twitter({
	consumer_key: 'FaDwwAlb9Fmjc762nvrUA',
	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	access_token_key: '605355787-7sGCezgRFDlaFsgGcMunDmae4blidlMA6GmCvIk9',
	access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});


twit.verifyCredentials(function (err, data) {
        console.log(data);
});

app.get('/', function(request, response){
	response.render("index");
});

app.listen(port);
console.log("listening on port " + port);