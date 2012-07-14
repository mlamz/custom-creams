var express = require('express')
,	port = process.env.PORT || 3000
,	FeedParser = require('feedparser')
,	parser = new FeedParser()
,	request = require('request')
,	moment = require('moment')
,	twitterRssFeed = { uri: 'http://api.twitter.com/1/statuses/user_timeline.rss?screen_name=custom_creams' }
,	homeViewModel = { twitterFeed: [] }
,	twiterTextLinkifier = require('./lib/twitterTextLinkifier')
,	numberOfTweetsToShow = 7
;

var app = express.createServer();

app.configure(function() {
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(__dirname + '/public'));
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
});


parser.on('article', function (article){
	var date
	,	tweet
	;

	if (homeViewModel.twitterFeed.length < numberOfTweetsToShow){
		date = moment(JSON.stringify(article.pubDate), "YYYY-MM-DDTHH:mm.ss.SSSZ").format("dddd, MMMM Do YYYY");
		tweet = twiterTextLinkifier.linkify(JSON.stringify(article.title.replace("Custom_Creams: ","")));

		homeViewModel.twitterFeed.push([date,tweet]);
	}
});


app.get('/', function(req, res){
	homeViewModel.twitterFeed = [];
	request(twitterRssFeed, function(error, twitterResponse, body){
		res.render("index", homeViewModel);
	}).pipe(parser.stream);
});

app.get('/our-story', function(req, res){
		res.render("our-story");
	});

app.get('/flavours', function(req, res){
		res.render("flavours");
	});

app.get('/hire-us', function(req, res){
		res.render("hire-us");
	});

app.get('/sponsors', function(req, res){
		res.render("sponsors");
	});

app.listen(port);
console.log("listening on port " + port);