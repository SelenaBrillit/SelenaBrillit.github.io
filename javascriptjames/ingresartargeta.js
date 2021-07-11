const form=document.getElementById("form")

form.addEventListener("submit", function(e){
   e.preventDefault();
})

function validacion(){
 
var numberTarget=document.getElementById("tG");
var cvvTarget = document.getElementById("cV");


if (numberTarget.value == ""){

    alert("Por favor ingresar un numero de targeta ");
    numberTarget.focus();
  
    

}
else if(cvvTarget.value==""){
    alert("Por favor ingrese su número de CVV ");
    cvvTarget.focus();}
    
    

    else {
        console.log("ok");
        window.location="../views/descargarfacturas.html";
        
}

 
}
    




    
