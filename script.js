// Menu and Popups
$(function() {
	var $menu = $("#menu");
	var $icon = $("#icon");
	var $layer = $("#popup-layer");

    $icon.on("click", function() {
    	$layer.fadeToggle();
    	$icon.toggleClass("icon-hover");
    	$menu.slideToggle();
    })

	$(".pop").on("click", pop_out);
	$(".menu-link").on("click", pop_out);

    function pop_out() {
    	var popup = $(this).attr("href");	 		
   		$layer.fadeIn();
   		$(popup).fadeIn();
    }

	$(".exit").on("click", dismiss);
    $("#popup-layer").on("click", dismiss);

	function dismiss() {
    	$(".popup").fadeOut();		
		$menu.slideUp();
		$icon.removeClass("icon-hover");
		$layer.fadeOut();
    }
})

$(function() {
    var $date = $("#date");
    var $width = $date.width();
    var $content = $date.find(".table");
    var dateArray = new Array(
        "<h1>Nov <span style=\"font-weight:300;\">20</span></h1>", 
        "<h1 style=\"line-height:50%;\"><span style=\"font-weight:300;;\">20</span><span style=\"font-size:50%;\"> days till CodeJam</span></h1>", 
        "<h1>Date</h1>");
    var i = 0;
    $date.on("click", function() {    
        $content.html(dateArray[i].toString());
        i++;
        if(i>2) { i=0; }
    })
})



// Popup "enlarge" button
$(function() {
	var $enlarge = $("#enlarge");
    var $smaller = $("#smaller");
    $enlarge.on("click", function() {
    	$(this).parent().addClass("enlarged");
    	$enlarge.fadeOut();
    	$smaller.fadeIn();
    })
    $smaller.on("click", function() {
    	$(this).parent().removeClass("enlarged");
    	$smaller.fadeOut();
    	$enlarge.fadeIn();
    })
})



// Sponsor wheel	
$(function() {
	var curr = 0;

	var $wheel = $("#wheel");
	var $container = $wheel.find("#frame-collection");
	var $sponsor = $container.find(".sponsor");	
	
	setInterval(function() {
		var width = "12em";
		$container.animate({"margin-top": "-="+width}, 1000, function() {
			curr++;
			if (curr === $sponsor.length) {
				curr = 0;
				$container.css("margin-top", "0");
			}
		});
	}, 2000);
})


// Entrance animation
$(function() {
	
    $("#entrance").delay(4500).animate({"height":"0"}, 1000);
    $("#title-img1").delay(4500).animate({"height":"0", "top":"0", "left":"0", "opacity":"0"}, 1500);
    

    $("#title-img3").delay(5000).animate({"height":"0", "top":"0", "left":"50%", "opacity":"0"}, 500);
    $("#title-img4").delay(5000).animate({"height":"0", "top":"0", "left":"50%", "opacity":"0"}, 500);

    
    $("#icon").delay(5000).animate({"opacity":"1"}, 1000);
    $("#title").delay(4500).animate({"width":"90%", "max-width":"40em"}, 1500);

    timeoutID = window.setTimeout(mask, 5500);
    function mask() {
        $("#entrance").hide();
    }
})


