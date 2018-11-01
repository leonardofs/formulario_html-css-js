//http://stackoverflow.com/questions/10082330/dynamically-create-bootstrap-alerts-box-through-javascript
function bootstrap_alert(elem, timeout, alert) {
    $(elem).show().html('<div class="alert"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><span>'+ alert +'</span></div>');
  
    if (timeout || timeout === 0) {
      setTimeout(function() { 
        $(elem).alert('close');
      }, timeout);    
    }
  };

function send_alert() {
    //se nome vazio
    var nome = document.getElementById("element_1").value;
    var estoque = document.getElementById("element_2").value;
    var preco = document.getElementById("element_3").value; 

    if( nome== null || nome ==""){

        bootstrap_alert('#form_errors', 2000,'O campo Nome é obrigatorio.');
        return ;
    }
    if( estoque == null || estoque ==""){

        bootstrap_alert('#form_errors', 2000,'O campo Estoque é obrigatorio.');
        return ;
    }
    if( preco == null || preco  ==""){

        bootstrap_alert('#form_errors', 2000,'O campo Preço é obrigatorio.');
        return ;
    }
    else{
        // caputura campos pega campos e envia formulario
        // retorna alerta do bootstrap
        bootstrap_alert('#form_errors', 2000,'Item cadastrado com sucesso.');
        return ;
    }
 };

function OnlyNumbers(e){
        var charCode = e.charCode ? e.charCode : e.keyCode;
    // charCode 8 = backspace   
    // charCode 9 = tab
    if (charCode != 8 && charCode != 9 && charCode!=44 && charCode!=46) {
        // charCode 48 equivale a 0   
        // charCode 57 equivale a 9
        if (charCode < 48 || charCode > 57) {
            return false;
        }
    }
};