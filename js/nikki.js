var windowHeight = $(window).height();
var navHeight = $('#navigation').height();
console.log(windowHeight);

$('#banner').css('height', windowHeight);
if ($(window).width() < 768) {
	$('#navigation').addClass('fixed-top');
    $("#banner").css("margin-top", "56px");
}

jQuery(document).ready(function() {

	$(window).resize(function() {
	    $('#banner').css('height', windowHeight);
	    if ($(window).width() < 768) {
	        $("#banner").css("height", "auto");
	    }
	});

	if ($(window).width() >= 768) {
		$(window).scroll(function () {
		    if ($(window).scrollTop() > windowHeight) {
		        $('#navigation').addClass('fixed-top');
		        $("#banner").css("margin-bottom", "56px");
		    } else {
		        $('#navigation').removeClass('fixed-top');
		        $("#banner").css("margin-bottom", "0");
		    }
		});
	}
});