module.exports = {
	linkify: function(text){
		text = text.replace(/(https?:\/\/\S+)/gi, function (s) {
        return '<a href="' + s + '" target="_blank">' + s + '</a>';
    });

    text = text.replace(/(^|)@(\w+)/gi, function (s) {
        return '<a href="http://twitter.com/' + s + '" target="_blank">' + s + '</a>';
    });

    text = text.replace(/(^|)#(\w+)/gi, function (s) {
        return '<a href="http://search.twitter.com/search?q=' + s.replace(/#/,'%23') + '" target="_blank">' + s + '</a>';
     });
    return text;
	}
}