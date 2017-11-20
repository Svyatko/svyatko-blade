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
