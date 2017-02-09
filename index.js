$(function() {
	//get the exercise programs
	$.getJSON('./data/programs.json').done(function(data) {
 		var programs = data;
		
		for (var i = 0; i < programs.length; i++) {
			var p = programs[i];
			
			var programsHTML = '<a href="'+ p.url +'"><div class="single-program">';
			programsHTML +=    		'<img src="'+ p.image +'" alt="Image representing "'+ p.title +'/>';
			programsHTML +=    		'<p class="program-title alt-font">'+ p.title +'</p>';
			programsHTML +=    		'<p class="program-type">'+ p.type +'</p>';
			programsHTML +=    '</div></a>';
			
			$('#programs-list').append(programsHTML);
		}
	}).fail(function() {
	  	alert('Oh no, something went wrong!');
	});
	
	//get the testimonials
	$.getJSON('./data/testimonials.json').done(function(data) {
 		var testimonials = data;
		
		for (var i = 0; i < testimonials.length; i++) {
			var t = testimonials[i];
			
			var testimonialsHTML = '<div class="single-testimonial">';
			testimonialsHTML +=    		'<p class="testimonial-quote alt-font">'+ t.quote +'</p>';
			testimonialsHTML +=    		'<p class="testimonial-author">&mdash;'+ t.author +'</p>';
			testimonialsHTML +=    '</div>';
			
			$('#testimonials').append(testimonialsHTML);
		}
		
		$('#testimonials').slick({
		    autoplay: true,
			arrows: false,
			dots: true,
			autoplaySpeed: 6000,
			speed: 750
	  	});
		setProgramAnimation();
	}).fail(function() {
	  	alert('Oh no, something went wrong!');
	});
	
	TweenLite.to('#hero-text', 1, { top: 0, opacity: 1 });
	setHeroAnimation();
});

function setHeroAnimation()
{
	var tween = TweenLite.to('#hero-text', 1, { top: '-100px', opacity: 0 });
	
	var controller = new ScrollMagic.Controller();
	var scene = new ScrollMagic.Scene({
		triggerElement: '#programs-section'
    })
	.setTween(tween);
	
	controller.addScene(scene);
}

function setProgramAnimation()
{
	$('.single-program').each(function(i) {
		var program = this;
		var tween = TweenLite.to(program, 1, { opacity: 1 });
		
		var controller = new ScrollMagic.Controller();
		var scene = new ScrollMagic.Scene({
			triggerElement: program,
			triggerHook: 0.7,
			reverse: false
	    })
		.setTween(tween);
		
		controller.addScene(scene);
	});
}