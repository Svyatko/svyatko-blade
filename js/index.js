$(document).ready(function() {
	setInterval(pulseFunc, 2000);
	 $("nav a").click(function(ev){
        $("a").removeClass("active");
        $(ev.target).addClass("active");
    });

	$( ".cross" ).click(function() {
		$( ".menu" ).slideToggle( "slow", function() {
			$( ".cross" ).hide();
			$( ".img-mobile" ).show();
		});
	});

	$(".burger-icon").click(function() {
		$(".menu").toggleClass("open");
		$(".burger-icon span").toggleClass("cross");
	})
	$(".menu li").click(function() {
		$(".menu").removeClass("open");
		$(".burger-icon span").removeClass("cross");
		$(".burger-icon").removeClass("open");
	})
});

function pulseFunc() {
	$('.pulse').fadeOut().fadeIn();
}

$(document).ready(function(){
    let viewportWidth = $(window).width();
    if (viewportWidth < 600) {
        $(".img img").removeClass("pulse").addClass("gallery-mobile");
	}

	$('.burger-icon').click(function(){
		$(this).toggleClass('open');
	});
});

