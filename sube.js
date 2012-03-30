(function(){

  subeVal = function(nro){
    nro = nro + "";
    if(!parseInt(nro)) return "No es un número";
    if(nro.length != 16) return "El número debe tener 16 digitos";
    return check_val(nro.split(""));
  };

  var check_val = function(nro){

    var sum = 0;
    for(var i = 0; i < 15; i++) {
      if(i % 2 === 0) nro[i] = (nro[i] * 2 > 9) ? nro[i] * 2 - 9 : nro[i] * 2;
      sum += parseInt(nro[i]);
    }
        
    return (nro[15] == (sum % 10 && 10 - sum % 10) ) ? "Valida" : "No valida";
  };
})();
