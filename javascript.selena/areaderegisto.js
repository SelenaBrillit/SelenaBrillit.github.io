var firebaseConfig = {
    apiKey: "AIzaSyD-yqe_reyPwCyjCBjuu9QmfkCrs00QVGE",
    authDomain: "base-de-datos-6b557.firebaseapp.com",
    projectId: "base-de-datos-6b557",
    storageBucket: "base-de-datos-6b557.appspot.com",
    messagingSenderId: "198300522313",
    appId: "1:198300522313:web:10142b2fcc34f711e1ac98"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// codigo para crear o registrar el usuario
function enviar(){
  var email= document.getElementById("ra").value;
  var contra= document.getElementById("re").value;
  firebase.auth().createUserWithEmailAndPassword(email, contra)
.then((userCredential) => {
  // Signed in
  var user = userCredential.user;
  alert("Se resguistro correctamente");
  // ...
})
.catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;
  alert("ocurrio un error");
  // ..
});

}

// acceso de usuario existente
function acceso(){
var email=document.getElementById("ri").value;
var  pass=document.getElementById("ro").value;
firebase.auth().signInWithEmailAndPassword(email, pass)
.then((userCredential) => {

var user = userCredential.user;

document.getElementById("abc").style.display="none";
alert("Accediste");
})
.catch((error) => {
var errorCode = error.code;
var errorMessage = error.message;
alert(errorMessage);

});

 }
 function cerrar() {
            firebase.auth().signOut()
                .then(function () {
                    console.log("salir");
                })
                .catch(function (error) {
                    console.log("error");
                })
        }

// observador de estado de autenticacion

  firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid= user.uid;
        document.getElementById("login").innerHTML = `<p>Logueado ` + user.email+`</p>`+  `<button onclick=cerrar();>cerrar sesion</button>`;
       
        // ...
      } else {
        // User is signed out
        // ...
        document.getElementById("login").innerHTML =    "no Logueado " ;
        document.getElementById("abc").style.display="block";
       
      }
    });
   
    