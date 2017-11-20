$(document).ready(function(){
	$(".logo").animate({
		top: '250px',
        opacity: '0.5'
	}, 1000);
});

$(document).ready(function() {
	setInterval(pulseFunc, 2000);
	 $("nav a").click(function(ev){
        $("a").removeClass("active");
        $(ev.target).addClass("active");
        //$('#'+ev.target.dataset.panel).addClass('active');
    });

	$( ".cross" ).hide();
	$( ".menu" ).hide();
	$( ".img-mobile" ).click(function() {
		$( ".menu" ).slideToggle( "slow", function() {
			$( ".img-mobile" ).hide();
			$( ".cross" ).show();
		});
	});

	$( ".cross" ).click(function() {
		$( ".menu" ).slideToggle( "slow", function() {
			$( ".cross" ).hide();
			$( ".img-mobile" ).show();
		});
	});
});

function pulseFunc() {
	$('.pulse').fadeOut().fadeIn();
}

$(document).ready(function(){
    let viewportWidth = $(window).width();
    if (viewportWidth < 600) {
        $(".img img").removeClass("pulse").addClass("gallery-mobile");
	}
});
