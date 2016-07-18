$(document).ready(function(){
  
  
	var totalGeral = 0;
	  $("#add").click(function(){
	    
	      
	    var ind = $('#lista tbody tr').length + 1;
	    var cod = $("[name='produto-cod']").val();
	    var produto = $("[name='produto']").val();
	    var qtde = $("[name='qtde']").val();
	    var unit = $("[name='val-unit']").val();
	
	    if( cod == '') return;
	    if( produto == '') return;
	    if( qtde == '') return;
	    if( unit == '') return;
			  
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
  

      
	  
  