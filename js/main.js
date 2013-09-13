$(document).ready(function() {	
	
	var intRegex = /^\d+$/;
	var floatRegex = /^((\d+(\.\d *)?)|((\d*\.)?\d+))$/;	
	
	var installed_price1, installed_price1;
	$('#content input[type="text"]').on('input', function() {
		var el = $(this);
		/*$('#content input[type="text"]').not(el).each(function(){
			if($(this).val() == "") $(this).val('0');
		});*/
		
		if( el.attr('id') == "inp3" ){
			installed_price1 = $('#inp3').val();
		} else {
			if(typeof installed_price1 === 'undefined' )
				installed_price1 = 300;
			var val3 = parseFloat($('#inp2').val()) + parseFloat(installed_price1);
			if (!isNaN(val3))
				$('#inp3').val( val3 );			
		}
			
		if( el.attr('id') == "inp23" )
			installed_price2 = $('#inp23').val();
		else {
			if(typeof installed_price2 === 'undefined')
				installed_price2 = 1500;
			var val23 = parseFloat($('#inp22').val()) + parseFloat(installed_price2);
			if (!isNaN(val23))
				$('#inp23').val( val23 );			
		}		
		
		/** -------------------------------------- **/	
		
		var res1 = parseFloat($('#inp2').val()) - parseFloat($('#inp1').val());
		if (!isNaN(res1)){
			$('#result1').html('$<span>' + res1 + '</span>' );
			$('#result1h').val( res1 );	
		}
				
		var res21 = parseFloat($('#inp22').val()) - parseFloat($('#inp21').val());
		if (!isNaN(res21)){
			$('#result21').html('$<span>' + res21 + '</span>' );
			$('#result21h').val( res21 );	
		}
				
		var res2 = parseFloat($('#inp4').val()) * parseFloat($('#result1 span').html());
		if (!isNaN(res2)){
			$('#result2').html('$<span>' + res2 + '</span>' );		
			$('#result2h').val( res2 );	
		}
				
		var res22 = parseFloat($('#inp24').val()) * parseFloat($('#result21 span').html());
		if (!isNaN(res22)){
			$('#result22').html('$<span>' + res22 + '</span>' );	
			$('#result22h').val( res22 );	
		}
				
		var res3 = parseFloat($('#inp5').val()) * parseFloat($('#result1 span').html());
		if (!isNaN(res3)){
			$('#result3').html('$<span>' + res3 + '</span>' );	
			$('#result3h').val( res3 );	
		}
				
		var res23 = parseFloat($('#inp25').val()) * parseFloat($('#result21 span').html());
		if (!isNaN(res23)){
			$('#result23').html('$<span>' + res23 + '</span>' );
			$('#result23h').val( res23 );
		}
				
		var res31 = parseFloat($('#inp4').val()) + parseFloat($('#inp24').val());
		if (!isNaN(res31)){
			$('#result31').html(res31);	
			$('#result31h').val( res31 );
		}
				
		var res32 = parseFloat($('#result2 span').html()) + parseFloat($('#result22 span').html());
		if (!isNaN(res32)){
			$('#result32').html('$<span>' + res32 + '</span>' );	
			$('#result32h').val( res32 );
		}
				
		var res33 = parseFloat($('#inp5').val()) + parseFloat($('#inp25').val());
		if (!isNaN(res33)){
			$('#result33').html(res33);	
			$('#result33h').val( res33 );
		}
				
		var res34 = parseFloat($('#result3 span').html()) + parseFloat($('#result23 span').html());
		if (!isNaN(res34)){
			$('#result34').html('$<span>' + res34 + '</span>' );		
			$('#result34h').val( res34 );	
		}
				
		var res35 = parseFloat($('#result34 span').html()) - parseFloat($('#result32 span').html());
		if (!isNaN(res35)){
			$('#result35').html('$<span>' + res35 + '</span>' );	
			$('#result35h').val( res35 );
		}
	});
		
	//placeholders for IE
	$('input, textarea').placeholder();		
	
	$('#download-btn').click(function(){	
		
		$('#main-form').submit();
		
		return false;
	});
	

});
