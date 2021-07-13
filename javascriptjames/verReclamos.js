//conexion a la carpeta (storage)
const storageRef = firebase.storage().ref();
//conexion a base de datos
const baseDeDatos = firebase.firestore();
const galeria = document.getElementById("imagenes");


const obteniendoImagenes = (unaFuncionX) => {
    baseDeDatos.collection("reclamos").onSnapshot(unaFuncionX);
}

window.addEventListener('DOMContentLoaded', mostrarImagenesDeFirebase());

function mostrarImagenesDeFirebase() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            galeria.innerHTML = ``;
            listaDeImagenes.forEach(
                (reclamo) => {
                    galeria.innerHTML = galeria.innerHTML +`<div style="background-color: beige;width: 23cm; height: 10cm; border-radius: 13px;margin-left: 6cm;"><div style="background-color: blue; width: 23cm;"  ><h2>`+ reclamo.data().correo +`</h2></div><div"><p style="width: 8 ;height:9 ;">`+ reclamo.data().reclamo +`</p></div></div>`;


                    
                 
    
                }
            )
            
        }
    )
}