//conexion a la carpeta (storage)
const storageRef = firebase.storage().ref();
//conexion a base de datos
const baseDeDatos = firebase.firestore();
const galeria = document.getElementById("imagenes");


const obteniendoImagenes = (unaFuncionX) => {
    baseDeDatos.collection("imagenes").onSnapshot(unaFuncionX);
}

window.addEventListener('DOMContentLoaded', mostrarImagenesDeFirebase());

function mostrarImagenesDeFirebase() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            galeria.innerHTML = ``;
            listaDeImagenes.forEach(
                (imagen) => {
                    galeria.innerHTML = galeria.innerHTML + `<div style="border: 12px solid teal;background-color: rgba(161, 133, 7); width: 8cm; height: 10cm; margin-left: 14cm;margin-top: 2cm; border-radius: 6px;><div id="imagen" ><img  style="width: 8cm;height: 5cm; border-radius: 6px;" src="`+ imagen.data().ruta + `></div><div id="description"><h2>`+ imagen.data().producto+`</h2><h2>`+imagen.data().precio+`</h2><a href="../views/metododepago.html" class="llamada" style="background: rgb(161, 83, 99); border-radius: 6px;text-decoration: none; margin-left: 3cm;width: 2cm; height: 4cm;">COMPRAR</a></div></div>`;
                    





                    
                 
    
                }
            )
            
        }
    )



}

