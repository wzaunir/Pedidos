$(document).ready(function(){
  
  var listaProdutos;
      
    $.getJSON( "produtos.json", function( data ) {    
      
      listaProdutos = data;
      
      $(data).each(function(idx,elem) {
	    $('.produto-nome').append( '<option value="'+elem.cod+'">'+elem.nome+'</option>');
      });
      
    });
    
    $("[name='produto-cod']").keyup(function(event) {
	
	  var elem = pesquisaProduto($(this).val());

	  
	  if(elem != null){
	  $('.produto-nome').val(elem.cod);
	  $('.val-unit').val(formataReais (elem.preco));
	  }else{
	    $('.produto-nome').val("");
	  }
      });
  
    function pesquisaProduto(cod){      
      for (idx in listaProdutos){
	
	var codigo = listaProdutos[idx].cod.toString();
	
	var busca = codigo.search(cod);

	if(busca >= 0){
	 // console.log(l);
	  return listaProdutos[idx]
	}
	
      }
    
      
    }
      
        
   
  
  
	$('.quant').keydown(function(event) {
  
	  
	  if( ( event.keyCode>=48 && event.keyCode <=59) || ( event.keyCode>=96 && event.keyCode <=105) || ( event.keyCode>=35 && event.keyCode <=40) || event.keyCode == 20){
	      return true;
	  }else{
	    return false;
	  }
	  
	});
  
	$('.val-unit').keydown(function(event) {
  
	 
	  event.preventDefault();
	  if( ( event.keyCode>=48 && event.keyCode <=59)){ 
	    
	    
	    var val = $('.val-unit').data('valor') || '';	      
	    
	    var digitado = String.fromCharCode(event.keyCode);
	    console.log(val+digitado);
	    $('.val-unit').data('valor',val+digitado);
	    $('.val-unit').val(formataReais (val+digitado));
	      return true;
	  }else{
	    return false;
	  }
	  
	});
  
	$('.produto-nome').change(function(e){
	  
	      $("[name='produto-cod']").val($(this).val());
	  
	});
	
	var totalGeral = 0;
	  $("#add").click(function(){
	     
	    var formValido = true;
	    $('#form div.erro').removeClass('erro');
	    
	    $('#form input,#form select').each(function(index,elem) {	     
	     
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
	    var unit = $('.val-unit').data('valor');

			  
	    var total = parseFloat(unit) * parseFloat(qtde);
	    
	    
	    totalGeral += total;
	    
	    totForm = formataReais(parseFloat(total));
	    uniForm = formataReais(parseFloat(unit));
		  
	    
	    var lista = $('<tr><td>'+ind+'</td><td>'+cod+'</td><td>'+produto+'</td><td class="text-right">'+qtde+'</td><td class="text-right">'+uniForm+'</td><td class="text-right">'+totForm+'</td></tr>');
	    
	    $('#lista').append(lista);
	    
	    $('#lista .totalizar span').html(formataReais(parseFloat(totalGeral)));
	     
	  });
	 
	  
	  function formataReais(valor){
	    
	    valor = parseFloat(valor);
	    
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
  

      
	  
  