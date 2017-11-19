$(document).ready(function(){
	$(".logo").animate({
		top: '250px',
        opacity: '0.5'
	}, 1000);
});

$(document).ready(function() {
	setInterval(pulseFunc, 2000);
	$('.carousel').slick({
		dots: true
	});
});

function pulseFunc() {
	$('.pulse').fadeOut().fadeIn();
}

$(document).ready(function(){
    $(window).resize(function(){
        let viewportWidth = $(window).width();
	    if (viewportWidth < 600) {
	        $("img").removeClass("pulse").addClass("gallery-mobile");
		}
    });
});
