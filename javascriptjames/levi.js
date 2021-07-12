//conexion a la carpeta (storage)
const storageRef = firebase.storage().ref();
//conexion a base de datos
const baseDeDatos = firebase.firestore();
const galeria = document.getElementById("imagenes");
const eliminarTarea = (unaTareaX) => { baseDeDatos.collection("imagenes").doc(unaTareaX).delete(); }
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
                    galeria.innerHTML = galeria.innerHTML + `<div style="width: 7cm;height: 9cm;"><img class="img-thumbnail" src="` + imagen.data().ruta + `" style="height: 5cm;"/><h3> ` +imagen.data().producto+ `</h3><p>`+imagen.data().precio+`</p><button class="btn btn-secondary btn-delete" data-id=` + imagen.id + ` >Eliminar</button></div></div></div>`;
                 
                    
                }
            )
            const btnDelete = document.querySelectorAll(".btn-delete");
            //console.log(btnDelete);
            btnDelete.forEach(
                (boton) => {
                    boton.addEventListener("click",
                        async (e) => await eliminarTarea(e.target.dataset.id))
                } );
        }
    )



}
fichero.addEventListener('change', subirImagenAFirebase);
function registrarEnBaseDeDatos(paramRuta,paramProducto,paramPrecio) {

    baseDeDatos.collection("imagenes").doc().set(
        {
            producto: paramProducto,
            precio:paramPrecio,
            ruta: paramRuta
        }
    )
}
function subirImagenAFirebase() {
    var imagenASubir = fichero.files[0];
    var tarea = storageRef.child(imagenASubir.name).put(imagenASubir);

    document.getElementById("progress").className = "";
    tarea.on('state_changed',
        //FuncionMientasCarga()
        function (estado) {
            var progreso = (estado.bytesTransferred / estado.totalBytes) * 100;
            console.log('Upload is ' + progreso + '% done');
            document.getElementById("barra-de-progreso").style.width = progreso + "%";
        }
        ,
        function (error) {
        },
        function () {
            var producto2 = document.getElementById("producto").value
            var precio2 = document.getElementById("precio").value
            tarea.snapshot.ref.getDownloadURL().then(function (ruta) {
                registrarEnBaseDeDatos(ruta,producto2,precio2);
                
            });
            //ocultar el div oculto
            document.getElementById("progress").className = "d-none";
        }
    )
   
};
function refres(){
    location.reload();
}
