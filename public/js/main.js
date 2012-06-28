$(document).ready(function(){
	console.log(window.location);

	switch(window.location.pathname){
		case '/':
			$("#blue-burst").addClass("blue-burst-home");
			break;
		case '/our-story':
			$("#blue-burst").addClass("blue-burst-our-story");
			break;
		case '/flavours':
			$("#blue-burst").addClass("blue-burst-flavours");
			break;
		case '/hire-us':
			$("#blue-burst").addClass("blue-burst-hire-us");
			break;
		case '/sponsors':
			$("#blue-burst").addClass("blue-burst-sponsors");
			break;
		default:
			break;
	}
	
});