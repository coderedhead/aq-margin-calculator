$(document).ready(function() {	
	
	var intRegex = /^\d+$/;
	var floatRegex = /^((\d+(\.\d *)?)|((\d*\.)?\d+))$/;	
	
	$('#content input[type="text"]').on('input', function() {
		var el = $(this);
		$('#content input[type="text"]')/*.not(el)*/.each(function(){
			if($(this).val() == "") $(this).val('0');
		});
		
		var val3 = parseFloat($('#inp2').val()) + 300;
		$('#inp3').html('$<span>' + val3 + '</span>' );
		
		var val23 = parseFloat($('#inp22').val()) + 1500;
		$('#inp23').html('$<span>' + val23 + '</span>' );
		
		var res1 = parseFloat($('#inp2').val()) - parseFloat($('#inp1').val());
		$('#result1').html('$<span>' + res1 + '</span>' );
				
		var res21 = parseFloat($('#inp22').val()) - parseFloat($('#inp21').val());
		$('#result21').html('$<span>' + res21 + '</span>' );
				
		var res2 = parseFloat($('#inp4').val()) * parseFloat($('#result1 span').html());
		$('#result2').html('$<span>' + res2 + '</span>' );		
				
		var res22 = parseFloat($('#inp24').val()) * parseFloat($('#result21 span').html());
		$('#result22').html('$<span>' + res22 + '</span>' );		
				
		var res3 = parseFloat($('#inp5').val()) * parseFloat($('#result1 span').html());
		$('#result3').html('$<span>' + res3 + '</span>' );		
				
		var res23 = parseFloat($('#inp25').val()) * parseFloat($('#result21 span').html());
		$('#result23').html('$<span>' + res23 + '</span>' );	
				
		var res31 = parseFloat($('#inp4').val()) + parseFloat($('#inp24').val());
		$('#result31').html(res31);		
				
		var res32 = parseFloat($('#result2 span').html()) + parseFloat($('#result22 span').html());
		$('#result32').html('$<span>' + res32 + '</span>' );			
				
		var res33 = parseFloat($('#inp5').val()) + parseFloat($('#inp25').val());
		$('#result33').html(res33);		
				
		var res34 = parseFloat($('#result3 span').html()) + parseFloat($('#result23 span').html());
		$('#result34').html('$<span>' + res34 + '</span>' );		
				
		var res35 = parseFloat($('#result34 span').html()) - parseFloat($('#result32 span').html());
		$('#result35').html('$<span>' + res35 + '</span>' );											
	});
		
	//placeholders for IE
	$('input, textarea').placeholder();		
	
	


});
