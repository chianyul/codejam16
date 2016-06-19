// Menu
$(function() {
	var $menu = $("#menu");
	var $icon = $("#icon");
	var $layer = $("#popup-layer");
	/*
	$icon.on("mouseenter", function() {
    	$menu.slideDown();
    })
    $menu.on("mouseleave", function() {
    	$menu.slideUp();
    })
    */
    $icon.on("click", function() {
    	$layer.fadeToggle();
    	$icon.toggleClass("icon-hover");
    	$menu.slideToggle();

	$(".thumbnail").on("click", pop_out);
	$("#frame-collection").on("click", pop_out);
	$(".menu-link").on("click", pop_out);

	var $layer = $("#popup-layer");

    function pop_out() {
    	var $popup = $(this).attr("href");	
   		
   		$layer.fadeIn();
   		$popup.fadeIn();
    }

	$(".exit").on("click", dismiss);
    $("#popup-layer").on("click", dismiss);

	function dismiss() {
    	$(".popup").fadeOut();
		$layer.fadeOut();
		$icon.removeClass("icon-hover");
		$menu.slideUp();
    }	
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