// Menu and Popups
$(function() {
	var $menu = $("#menu");
	var $icon = $("#icon");
	var $layer = $("#popup-layer");

    $icon.on("click", function() {
        $(".popup").fadeOut();  
    	$layer.fadeToggle();
    	$icon.toggleClass("icon-hover");
    	$menu.slideToggle();
    })    

	$(".pop").on("click", pop_out);

    function pop_out() {
        $(".popup").fadeOut();
        $icon.removeClass("icon-hover");
        $menu.slideUp();
    	var popup = $(this).attr("href");	 		
   		$layer.fadeIn();
   		$(popup).fadeIn();
    }

	$(".exit").on("click", exit);
    $("#popup-layer").on("click", exit);

	function exit() {
    	$(".popup").fadeOut();		
		$menu.slideUp();
		$icon.removeClass("icon-hover");
		$layer.fadeOut();
    }
})




// Annnouncement
$(function() {
    var $menu = $("#menu");
    var $icon = $("#icon");
    var $news = $("#news-container");    
    var $news_items = $(".news-item");
    
    var $layer = $("#popup-layer");    

    $(".dismiss").on("click", dismiss_news);
    function dismiss_news() {
        var $this_news = $(this).parent().parent();

        $this_news.slideUp();
        $this_news.removeClass("active-news");
        if($(".active-news").length == 0) {
            $news.slideUp();            
        }
    }

    $("#show-news").on("click", show_news);
    function show_news() {
        $menu.slideUp();
        $icon.removeClass("icon-hover");
        $news.slideDown();
        $news_items.slideDown();
        $news_items.addClass("active-news");
        $layer.fadeOut();
    }

    $("#clear-news").on("click", function() {
        $news.slideUp();
    })
})




// Date tile
$(function() {
    var today = new Date();
    var codejamDate = new Date();
        codejamDate.setFullYear(2016,10,20); // Nov 20, 2016
    var daysLeft = Math.floor((codejamDate - today) / (1000*60*60*24));

    var $date_tile = $("#date");
    var $content = $date_tile.find(".table");
    var dateArray = new Array(
        "<h1>Nov <span style=\"font-weight:300;\">20</span></h1>", 
        "<h1 style=\"line-height:50%;\"><span style=\"font-weight:300;;\">"+daysLeft+"</span><span style=\"font-size:50%;\"> days till CodeJam</span></h1>", 
        "<h1>Date</h1>");
    
    var i = 0;
    setInterval(function() {
        $content.html(dateArray[i].toString());
        i++;
        if(i>dateArray.length-1) { i=0; }
    }, 3000);
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
/*
$(function() {
    $("#entrance").delay(4500).animate({"height":"0"}, 1000);
    $("#title-img1").delay(4500).animate({"height":"0", "top":"0", "left":"0"}, 1500);
    

    $("#title-img3").delay(5000).animate({"height":"0", "top":"0", "left":"50%"}, 500);
    $("#title-img4").delay(5000).animate({"height":"0", "top":"0", "left":"50%"}, 500);

    $("#title").delay(4500).animate({"width":"90%", "max-width":"40em"}, 1500);

    timeoutID = window.setTimeout(mask, 5500);
    function mask() {
        $("#entrance").hide();
    }
})
*/

