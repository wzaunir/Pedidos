$(document).ready(function(){
  
 
	$('.quant').keydown(function(event) {
  
	  
	  if( ( event.keyCode>=48 && event.keyCode <=59) || ( event.keyCode>=96 && event.keyCode <=105) || ( event.keyCode>=35 && event.keyCode <=40) || event.keyCode == 20){
	      return true;
	  }else{
	    return false;
	  }
	  
	});
  
	$('.val-unit').keydown(function(event) {
  
	 
	  if( ( event.keyCode>=48 && event.keyCode <=59) || ( event.keyCode>=96 && event.keyCode <=105) || ( event.keyCode>=35 && event.keyCode <=40)){ 
	    
	    var val = $('.val-unit').val();
	    var digitado = String.fromCharCode(event.keyCode);
	      return true;
	  }else{
	    return false;
	  }
	  
	});
  
	var totalGeral = 0;
	  $("#add").click(function(){
	     
	    var formValido = true;
	    $('#form div.erro').removeClass('erro');
	    
	    $('#form input').each(function(index,elem) {	     
	     
		if($(elem).val() == ''){
		  $(elem).parent().addClass('erro');
		  formValido = false;
		}		
	      
	    });
	    
	    if(formValido == false) return;
	    
	    var ind = $('#lista tbody tr').length + 1;
	    var cod = $("[name='produto-cod']").val();
	    var produto = $("[name='produto']").val();
	    var qtde = $("[name='qtde']").val();
	    var unit = $("[name='val-unit']").val();

			  
	    var total = parseFloat(unit) * parseFloat(qtde);
	    
	    
	    totalGeral += total;
	    
	    totForm = formataReais(parseFloat(total));
	    uniForm = formataReais(parseFloat(unit));
		  
	    
	    var lista = $('<tr><td>'+ind+'</td><td>'+cod+'</td><td>'+produto+'</td><td class="text-right">'+qtde+'</td><td class="text-right">'+uniForm+'</td><td class="text-right">'+totForm+'</td></tr>');
	    
	    $('#lista').append(lista);
	    
	    $('#lista .totalizar span').html(formataReais(parseFloat(totalGeral)));
	     
	  });
	 
	  
	  function formataReais(valor){
	    
	    
	    
	    var formatado = "R$";
	    var inicial = valor.toFixed(2).toString();
	    var partes = inicial.split('.');  
	    var int = partes[0];
	    var mil = '';
	    while(int.length > 3){
	      
	      mil = int.substr(-3,3) + mil;
	      
	      int = int.substr(0,-3);
	      
	      
	    }
	    formatado += int+mil+','+partes[1];
		
	    return formatado;
	      
	  }
  
  
  
});
  

      
	  
  