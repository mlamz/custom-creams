$(document).ready(function(){
	console.log(window.location);

	switch(window.location.pathname){
		case '/':
			$("#blue-burst").addClass("blue-burst-home");
			break;
		case '/our-story':
			$("#blue-burst").addClass("blue-burst-our-story");
			break;
		default:
			break;
	}
	
});