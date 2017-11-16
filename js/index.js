/*document.querySelector("button").addEventListener('click', getData);

function getData(event) {
	event.preventDefault();
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4 && xhr.status === 200) {
			const client = JSON.parse(xhr.responseText);
			document.getElementById('name').value = client.name;
			document.getElementById('email').value = client.email;
			document.getElementById('msg').value = client.msg;
		}
	}

	xhr.open('GET', 'client.json', true);
	xhr.send();
}
*/
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
/*
$('form input[type="submit"]').click(sendForm);

function sendForm(e) {
    const form = $('form')[0];
    if (!form.checkValidity()) {
        return;
    }
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/svatoslav2104@gmail.com", 
        method: "POST",
        data: {
            name: $('#name').val(),
            email: $('#email').val()
        },
        dataType: "json"
    })
    .done(function(){
        $('form')[0].reset();
        $('form').html('Thank you!');
    })
    .fail(function(){
        $('form').html('Sorry, there is an error!');
    });
}*/