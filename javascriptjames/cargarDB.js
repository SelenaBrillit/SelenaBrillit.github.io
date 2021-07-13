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
                    galeria.innerHTML = galeria.innerHTML + `<div style="  border: 12px solid teal;background-color: rgba(161, 133, 7); width: 8cm; height: 12cm; margin-left: 14cm;margin-top: 2cm; border-radius: 6px;"> <article class="james7"><article class="card"></article><img src="`+ imagen.data().ruta + `" style="width: 6cm;height: 5cm; margin-left: 1cm; border-radius: 6px;"><div class="contenedor"
                    style="background-color: blue"height: 6cm;;><h2 style="background-color: yellow"; class="title"`+ imagen.data().producto+`</h2><p class="copy">`+imagen.data().precio+`</p><a href="../views/metododepago.html" class="llamada" style="background: rgb(161, 83, 99); border-radius: 6px;text-decoration: none; margin-left: 2cm;">COMPRAR</a></div></article></div>`;
                    console.log(imagen.data().producto)




                    
                 
    
                }
            )
            
        }
    )



}


