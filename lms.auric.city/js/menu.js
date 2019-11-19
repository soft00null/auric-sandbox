
var ww = document.body.clientWidth;

$(document).ready(function() {
	$(".navMenu li a").each(function() {
		if ($(this).next().length > 0) {
			$(this).addClass("parent");
		};
	})
	
	$(".toggleMenu").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(".navMenu").toggle();
	});
	adjustMenu();
})

$(window).bind('resize orientationchange', function() {
	ww = document.body.clientWidth;
	adjustMenu();
});

var adjustMenu = function() {
	if (ww < 770) {
		$(".toggleMenu").css("display", "block");
		if (!$(".toggleMenu").hasClass("active")) {
			$(".navMenu").hide();
		} else {
			$(".navMenu").show();
		}
		$(".navMenu li").unbind('mouseenter mouseleave');
		$(".navMenu li a.parent").unbind('click').bind('click', function(e) {
			// must be attached to anchor element to prevent bubbling
			e.preventDefault();
			$(this).parent("li").toggleClass("hover");
		});
	} 
	else if (ww >= 770) {
		
		$(".toggleMenu").css("display", "none");
		$(".navMenu").show();
		$(".navMenu li").removeClass("hover");
		$(".navMenu li a").unbind('click');
		$(".navMenu>li").on('focus',function(){
			$(".navMenu>li").removeClass('hover');								   
			var ulLen	= $(this).children("ul").length;
			if(ulLen>0)
				$(this).addClass('hover');										
		});
		$(".navMenu li").unbind('mouseenter mouseleave focus').bind('mouseenter mouseleave focus', function() {
		 	// must be attached to li so that mouseleave is not triggered when hover over submenu
		 	$(this).toggleClass('hover');
			
		});
	}
}

