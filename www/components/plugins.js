
$(document).on("click","#alerta", function(){
  navigator.notification.alert("Minha mensagem", null, "Aviso!", "Aceito");
});
$(document).on("click","#confirm", function(){
  function confirma(buttonIndex){
    if(buttonIndex == "1"){
      navigator.notification.alert("Escolheu a opção A");
    }else{
      navigator.notification.alert("Escolheu a opção B");
    }
  }
  navigator.notification.confirm("Escolha A ou B", confirma, "Escolha:",['A','B']);
});
$(document).on("click","#beep", function(){
  navigator.notification.beep(10);
});
$(document).on("click","#vibrar", function(){
  navigator.vibrate(4000);
});