
const form=document.getElementById("form")

form.addEventListener("submit", function(e){
   e.preventDefault();
})





function  validacion()

{
    var fName=document.getElementById("fName")
    var dirDep =document.getElementById("dirDep")
    var dirDis =document.getElementById("dirDis")
    var dircal =document.getElementById("dircal")
    var fMail=document.getElementById("fMail")
    var valCorreo= /\w+@\w+\.+[a-z]/;

    if(fName.value==""||!isNaN(fName.value)){
        alert("Por favor ingresar un nombre valido");
        fName.focus(); 
        
          
        
    }

 else if(dirDep.value==""||!isNaN(dirDep.value)){

    alert("Por favor ingresar un nombre de departamento valido");
    dirDep.focus();
    
    
 }
 else if(dirDis.value==""||!isNaN(dirDis.value)){

    alert("Por favor ingresar un nombre de provincia valido");
    dirDis.focus();
    
    
 }
 else if(dircal.value==""||!isNaN(dircal.value)){

    alert("Por favor ingresar un nombre de una calle valido");
    dircal.focus();
   
    
 }
 else if(fMail.value==""){
    alert("Por favor ingresar un correo");
    fMail.focus();
    
   
 }

 else if(valCorreo.test(fMail)){
    alert("Por favor ingresar un correo valido");
    fMail.focus();
    
    
 }
 else {
    console.log("ok");
    window.location="../views/ingresartargeta.html";
    
 
  
}
}
