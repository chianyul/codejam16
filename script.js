$(function() {
	// Popup windows
	$("a.thumbnail").on("click", function() {
		var popup = $(this).attr("href");
		var layer = $("#popup-layer");
   		
   		$(popup).fadeIn(300);
   		$(layer).fadeIn(300);
    });

	$(".exit").on("click", dismiss);
    $("#popup-layer").on("click", dismiss);

	function dismiss() {
    	$(".popup, #popup-layer").fadeOut(300);
    }

    var $enlarge = $("#enlarge");
    var $smaller = $("#smaller");
    var $Form = $("#Form");
    $enlarge.on("click", function() {
    	$Form.addClass("enlarged");
    	$enlarge.fadeOut();
    	$smaller.fadeIn();
    })
    $smaller.on("click", function() {
    	$Form.removeClass("enlarged");
    	$smaller.fadeOut();
    	$enlarge.fadeIn();
    })
    
	// Sponsor wheel	
	var curr = 1;

	var $wheel = $("#wheel");
	var $sponsorContainer = $wheel.find(".sponsors");
	var $sponsors = $sponsorContainer.find(".sponsor");
	
	/*
	setInterval(function() {
		var width = $sponsors[curr];
		$("#wheel .sponsors").animate({"margin-left": "-=12em"}, 1000, function() {
			curr++;
			if (curr === $sponsors.length) {
				curr = 1;
				$sponsorContainer.css("margin-left", "0");
			}
		});
	}, 3000);
	*/
})