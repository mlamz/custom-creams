$(document).ready(function(){
	

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
			$("ul.nav-buttons li a:eq(4)").addClass("highlight");

			//$("#blue-burst").addClass("blue-burst-hire-us");
			break;
		case '/sponsors':
			$("ul.nav-buttons li a:eq(5)").addClass("highlight");

			//$("#blue-burst").addClass("blue-burst-sponsors");
			break;
		case '/nitrogen-bar':
			$("ul.nav-buttons li a:eq(3)").addClass("highlight");

			//$("#blue-burst").addClass("blue-burst-sponsors");
			break;
		default:
			break;
	};

	var ytplayer;

	
	var params = { allowScriptAccess: "always" };
    var atts = { id: 'ytapiplayer' };
    swfobject.embedSWF("http://www.youtube.com/v/oHjHTaS3k_s?enablejsapi=1&playerapiid=ytplayer&version=3", "ytapiplayer", "1", "1", "8", null, null, params, atts);



    function play() {
    	console.log("ytplayer", ytplayer);
      if (ytplayer) {
        ytplayer.playVideo();
        console.log(ytplayer);
      }
    }


	$(".video-box").click(function(){
		$('#flash-message').show();
		$(this).css( { 'background-color':'Black'});
		$(this).css('background-image', 'none');

		console.log($(this));

		$('#ytapiplayer').attr('width','720');
		$('#ytapiplayer').attr('height','470');
			ytplayer = document.getElementById("ytapiplayer");

			play();
		
		
	});


	
});