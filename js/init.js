
$(document).ready(function(){
	$('#navigation').localScroll();
	$('#container').isotope({
  // options
  		itemSelector : '.item',
  		layoutMode : 'fitRows'
	});

}); // close out script
