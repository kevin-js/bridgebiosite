$(document).ready(function(){
	$('#about').click(function(){
		if($('#about-description').css('display') == 'none')
			$('#about-description').css('display', 'block');
		else
			$('#about-description').css('display', 'none');
	});
});
