//conexion a la carpeta (storage)
// const storageRef = firebase.storage().ref();
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
                    galeria.innerHTML = galeria.innerHTML + `<div style="width: 7cm;height: 9cm;"><img class="img-thumbnail" src="` + imagen.data().ruta + `" style="height: 5cm;"/><h3> ` +imagen.data().producto+ `</h3><p>`+imagen.data().precio+`</p>`;
                 
                    
                }
            )
            
        }
    )



}


