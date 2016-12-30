jQuery(function($){

	$(window).on('load',function(){
		$grid=$('.grid').isotope();
	});

	$('.nav').on('click','button',function(){
		var filterName = $(this).data('filter');
		$grid.isotope({
			filter:filterName
		})
	});

});