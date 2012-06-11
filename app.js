var express = require('express')
,	port = process.env.PORT || 3000
,	FeedParser = require('feedparser')
,	parser = new FeedParser()
,	request = require('request')
,	twitterRssFeed
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
      console.log(JSON.stringify(article.title));
      console.log(JSON.stringify(article.pubDate));
    });

twitterRssFeed = { uri: 'http://api.twitter.com/1/statuses/user_timeline.rss?screen_name=custom_creams' };
    
request(twitterRssFeed).pipe(parser.stream);

app.get('/', function(request, response){
	response.render("index");
});

app.listen(port);
console.log("listening on port " + port);