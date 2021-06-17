function  registrar()

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
        return false;
    }

 else if(dirDep.value==""||!isNaN(dirDep.value)){

    alert("Por favor ingresar un nombre de departamento valido");
    dirDep.focus();
    return false;
 }
 else if(dirDis.value==""||!isNaN(dirDis.value)){

    alert("Por favor ingresar un nombre de distrito valido");
    dirDis.focus()
    return false;
 }
 else if(dircal.value==""||!isNaN(dircal.value)){

    alert("Por favor ingresar un nombre de una calle valido");
    dircal.focus();
    return false;
 }
 else if(fMail.value==""){
    alert("Por favor ingresar un correo");
    fMail.focus();
    return false;
 }

 else if(!valCorreo.test(fMail)){
    alert("Por favor ingresar un correo valido");
    fMail.focus();
    return false;
 }
}