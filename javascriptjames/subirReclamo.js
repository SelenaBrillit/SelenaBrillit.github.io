//conexion a base de datos
const db = firebase.firestore();

//obtengo el formulario web y el contenedor
const taskForm = document.getElementById("task-form");
const taskContainer = document.getElementById("task-container");
let estadoEditar = false;

//funcion a la vieja
function saveTask(correo, reclamo) {
    db.collection("reclamos").doc().set(
        {
            correo: correo,
            reclamo: reclamo
        }
    ) 

}



//funcion a la nueva
const getTasks = () => { db.collection("reclamos").get();
 }





taskForm.addEventListener("submit", async (e) => {
    //codigo de mi funcion del evento submit

    //evita refrescar la pagina
    e.preventDefault();

    //obtengo los valores
    const correo = taskForm['task-title'].value;
    const reclamo = taskForm['task-description'].value;

    if (!estadoEditar) {
        alert("Estimado usuario su reclamo o sugerencia se a registrado");
        await saveTask(correo, reclamo);
        
        
    }

    })
// window.location="../views/jcarlos.html";

