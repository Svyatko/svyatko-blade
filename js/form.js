$('form button[type="submit"]').click(sendForm);

function sendForm(event) {
		event.preventDefault();
	$.ajax({
	    url: "https://formspree.io/svatoslav2104@gmail.com", 
	    method: "POST",
	    data: {
	    	name: $('#name').val(),
	    	email: $('#email').val(),
	    	msg: $('#msg').val()
	    },
	    dataType: "json"
	})
	.done(function(){
		$('.form-inp').html('<h2>Thank you!</h2>');
	});
}