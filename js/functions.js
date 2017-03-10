$('.nav-primary-toggle').click(function() {
	$('body').toggleClass('disable-scroll');
	$('#nav-primary').toggleClass('slide-left');
	$('#page-container').toggleClass('slide-left');
	$('#page-container > #header').toggleClass('slide-left');
	$('#dark-overlay').toggleClass('display-layer');
});





$(document).ready(function() {
	$('#content > section').css({
		'min-height' : function() { return $(window).height() * 0.5; }
	});



	if ($(window).width() < 375) {
// alert("Window width < 375");

	}
	if ($(window).width() >= 375) {
// alert("Window width >= 375");

	} 
	if ($(window).width() >= 375 && $(window).width() <= 413) {
// alert("Window width >= 375 + <= 413");

	}
	if ($(window).width() <= 413) {
// alert("Window width <= 413");

	}
	if ($(window).width() >= 414) {
// alert("Window width >= 414");

	} 
	if ($(window).width() >= 414 && $(window).width() <= 506) {
// alert("Window width >= 414 + <= 506");

	}
	if ($(window).width() <= 506) {
// alert("Window width <= 413");

	}
	if ($(window).width() >= 507) {
// alert("Window width >= 507");

	} 
	if ($(window).width() >= 507 && $(window).width() <= 677) {
// alert("Window width >= 507 + <= 677");

	}
	if ($(window).width() <= 677) {
// alert("Window width <= 677");

	}
	if ($(window).width() >= 678) {
// alert("Window width >= 678");
		$('#content > section').css({
			'min-height' : function() { return $(window).height(); }
		});
	}
	if ($(window).width() >= 678 && $(window).width() <= 767) {
// alert("Window width >= 678 + <= 767");

	}
	if ($(window).width() <= 767) {
// alert("Window width <= 767");

	}
	if ($(window).width() >= 768) {
// alert("Window width >= 768");

	}
	if ($(window).width() >= 768 && $(window).width() <= 991) {
// alert("Window width >= 768 + <= 991");

	}
	if ($(window).width() <= 991) {
// alert("Window width <= 991");

	}
	if ($(window).width() >= 992) {
// alert("Window width >= 992");

	}
	if ($(window).width() >= 992 && $(window).width() <= 1023) {
// alert("Window width >= 992 + <= 1199");

	}
	if ($(window).width() <= 1023) {
// alert("Window width <= 1023");

	}
	if ($(window).width() >= 1024) {
// alert("Window width >= 1024");

	}
	if ($(window).width() >= 1024 && $(window).width() <= 1199) {
// alert("Window width >= 1024 + <= 1199");

	}
	if ($(window).width() <= 1199) {
// alert("Window width <= 1199");

	}
	if ($(window).width() >= 1200) {
// alert("Window width >= 1200");

	}
});










$(window).resize(function(){
	$('#content > section').css({
		'min-height' : function() { return $(window).height() * 0.5; }
	});



	if ($(window).width() < 375) {
// alert("Window width < 375");

	}
	if ($(window).width() >= 375) {
// alert("Window width >= 375");

	} 
	if ($(window).width() >= 375 && $(window).width() <= 413) {
// alert("Window width >= 375 + <= 413");

	}
	if ($(window).width() <= 413) {
// alert("Window width <= 413");

	}
	if ($(window).width() >= 414) {
// alert("Window width >= 414");

	} 
	if ($(window).width() >= 414 && $(window).width() <= 506) {
// alert("Window width >= 414 + <= 506");

	}
	if ($(window).width() <= 506) {
// alert("Window width <= 413");

	}
	if ($(window).width() >= 507) {
// alert("Window width >= 507");

	} 
	if ($(window).width() >= 507 && $(window).width() <= 677) {
// alert("Window width >= 507 + <= 677");

	}
	if ($(window).width() <= 677) {
// alert("Window width <= 677");

	}
	if ($(window).width() >= 678) {
// alert("Window width >= 678");
		$('#content > section').css({
			'min-height' : function() { return $(window).height(); }
		});
	}
	if ($(window).width() >= 678 && $(window).width() <= 767) {
// alert("Window width >= 678 + <= 767");

	}
	if ($(window).width() <= 767) {
// alert("Window width <= 767");

	}
	if ($(window).width() >= 768) {
// alert("Window width >= 768");

	}
	if ($(window).width() >= 768 && $(window).width() <= 991) {
// alert("Window width >= 768 + <= 991");

	}
	if ($(window).width() <= 991) {
// alert("Window width <= 991");

	}
	if ($(window).width() >= 992) {
// alert("Window width >= 992");

	}
	if ($(window).width() >= 992 && $(window).width() <= 1023) {
// alert("Window width >= 992 + <= 1199");

	}
	if ($(window).width() <= 1023) {
// alert("Window width <= 1023");

	}
	if ($(window).width() >= 1024) {
// alert("Window width >= 1024");

	}
	if ($(window).width() >= 1024 && $(window).width() <= 1199) {
// alert("Window width >= 1024 + <= 1199");

	}
	if ($(window).width() <= 1199) {
// alert("Window width <= 1199");

	}
	if ($(window).width() >= 1200) {
// alert("Window width >= 1200");

	}
}).resize();










$(window).scroll(function() {
	if($(this).scrollTop() > 1) {
		$('body').addClass('bg-pms5455c');
	} else {
		$('body').removeClass('bg-pms5455c');
	}


	if ($(window).width() < 375) {
// alert("Window width < 375");

	}
	if ($(window).width() >= 375) {
// alert("Window width >= 375");

	} 
	if ($(window).width() >= 375 && $(window).width() <= 413) {
// alert("Window width >= 375 + <= 413");

	}
	if ($(window).width() <= 413) {
// alert("Window width <= 413");

	}
	if ($(window).width() >= 414) {
// alert("Window width >= 414");

	} 
	if ($(window).width() >= 414 && $(window).width() <= 506) {
// alert("Window width >= 414 + <= 506");

	}
	if ($(window).width() <= 506) {
// alert("Window width <= 413");

	}
	if ($(window).width() >= 507) {
// alert("Window width >= 507");

	} 
	if ($(window).width() >= 507 && $(window).width() <= 677) {
// alert("Window width >= 507 + <= 677");

	}
	if ($(window).width() <= 677) {
// alert("Window width <= 677");

	}
	if ($(window).width() >= 678) {
// alert("Window width >= 678");

	}
	if ($(window).width() >= 678 && $(window).width() <= 767) {
// alert("Window width >= 678 + <= 767");

	}
	if ($(window).width() <= 767) {
// alert("Window width <= 767");

	}
	if ($(window).width() >= 768) {
// alert("Window width >= 768");

	}
	if ($(window).width() >= 768 && $(window).width() <= 991) {
// alert("Window width >= 768 + <= 991");

	}
	if ($(window).width() <= 991) {
// alert("Window width <= 991");

	}
	if ($(window).width() >= 992) {
// alert("Window width >= 992");

	}
	if ($(window).width() >= 992 && $(window).width() <= 1023) {
// alert("Window width >= 992 + <= 1199");

	}
	if ($(window).width() <= 1023) {
// alert("Window width <= 1023");

	}
	if ($(window).width() >= 1024) {
// alert("Window width >= 1024");

	}
	if ($(window).width() >= 1024 && $(window).width() <= 1199) {
// alert("Window width >= 1024 + <= 1199");

	}
	if ($(window).width() <= 1199) {
// alert("Window width <= 1199");

	}
	if ($(window).width() >= 1200) {
// alert("Window width >= 1200");

	}
});
