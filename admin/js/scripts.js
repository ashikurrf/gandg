$(document).ready(function (){
	var navState = 'close';

	$('#menuBtn').on('click',function() {
		if(navState === 'close') {
			var height = $(document).height() - $("#navbar").height();
			$("#sidebar").css('width','280px');
			$("#sidebar").css('height',height);
			$("#main").css('margin-left','280px');
			navState = 'open';
		} else {
			$("#sidebar").css('width','0px');
			$("#main").css('margin-left','0px');
			navState = 'close';
		}
	});
});


