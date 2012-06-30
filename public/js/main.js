$(document).ready(function(){
	console.log(window.location);

	switch(window.location.pathname){
		case '/':
			//$("#blue-burst").addClass("blue-burst-home");
			$("ul.nav-buttons li a:eq(0)").addClass("highlight");
			break;
		case '/our-story':
			$("ul.nav-buttons li a:eq(1)").addClass("highlight");

			//$("#blue-burst").addClass("blue-burst-our-story");
			break;
		case '/flavours':
			$("ul.nav-buttons li a:eq(2)").addClass("highlight");

			//$("#blue-burst").addClass("blue-burst-flavours");
			break;
		case '/hire-us':
			$("ul.nav-buttons li a:eq(3)").addClass("highlight");

			//$("#blue-burst").addClass("blue-burst-hire-us");
			break;
		case '/sponsors':
			$("ul.nav-buttons li a:eq(4)").addClass("highlight");

			//$("#blue-burst").addClass("blue-burst-sponsors");
			break;
		default:
			break;
	}
	
});