$(function() {
	// Popup windows
	$("a.thumbnail, #sponsor-container").on("click", function() {
		var popup = $(this).attr("href");
		var layer = $("#popup-layer");
   		
   		$(layer).fadeIn(300);
   		$(popup).fadeIn(300);
    });

	$(".exit").on("click", dismiss);
    $("#popup-layer").on("click", dismiss);

	function dismiss() {
    	$(".popup, #popup-layer").fadeOut(300);
    }	
})

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

$(function() {
	// Sponsor wheel	
	var curr = 0;

	var $wheel = $("#wheel");
	var $container = $wheel.find("#sponsor-container");
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