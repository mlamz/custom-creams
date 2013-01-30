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

	var tag = document.createElement('script');

      tag.src = "//www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      var player;

      function onPlayerReady(event) {
      	$('#player').attr('width','720');
	 	$('#player').attr('height','470');

        event.target.playVideo();
      }

      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }


      $(".video-box").click(function(){
		$(this).css( { 'background-color':'Black'});
		$(this).css('background-image', 'none');

		console.log($(this));

		player = new YT.Player('player', {

          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
		
		
	});
	
});