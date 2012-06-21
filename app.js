var express = require('express')
,	port = process.env.PORT || 3000
,	FeedParser = require('feedparser')
,	parser = new FeedParser()
,	request = require('request')
,	moment = require('moment')
,	twitterRssFeed = { uri: 'http://api.twitter.com/1/statuses/user_timeline.rss?screen_name=custom_creams' }
,	homeViewModel = { twitterFeed: [] }
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
	var date = moment(JSON.stringify(article.pubDate), "YYYY-MM-DDTHH:mm.ss.SSSZ");

	homeViewModel.twitterFeed.push([date.format("dddd, MMMM Do YYYY"),JSON.stringify(article.title)]);
    });


app.get('/', function(req, res){
	homeViewModel.twitterFeed = [];
	request(twitterRssFeed, function(error, twitterResponse, body){
		res.render("index", homeViewModel);
	}).pipe(parser.stream);

});

app.listen(port);
console.log("listening on port " + port);