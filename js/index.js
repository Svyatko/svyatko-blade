$(document).ready(function(){
	$(".logo").animate({
		top: '250px',
        opacity: '0.5'
	}, 1000);
});

$(document).ready(function() {
	setInterval(pulseFunc, 2000);
});

function pulseFunc() {
	$('.pulse').fadeOut().fadeIn();
}