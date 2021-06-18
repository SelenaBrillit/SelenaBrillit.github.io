function config(){
 
var numberTarget=document.getElementById("tG");
var cvvTarget = document.getElementById("cV");

if (cvvTarget.value==""){

    alert("Por favor ingresar un numero de targeta ");
    numberTarget.focus();
    return false;
    

}
else if(cvvTarget.value==""){
    alert("Por favor ingrese su número de CVV ");
    cvvTarget.focus();
    return false
    
}
else if(cvvTarget.value=="" && cvvTarget.value=="" ){
    document.location.reload()
}

}



    
