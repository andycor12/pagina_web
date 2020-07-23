//permitir que su nombre inicie en el id del input
var newUser = document.getElementById('newUser');
var newPassword = document.getElementById('newPassword');
var Category = document.getElementById('txtvalue');

function ddlselect(){
    //opciones para el selected
    var Category=document.getElementById("category");
    var displaytext=category.options[Category.selectedIndex].text;
    //muestra en un input
    document.getElementById("txtvalue").value=displaytext;
}

// Los guardo en localStorage y se almacena y se actualiza
function store() {
    localStorage.setItem('Category', category.value);
    localStorage.setItem('newUser', newUser.value);
    localStorage.setItem('newPassword', newPassword.value);
    alert("Dato ingresado correctamente");
    window.location="html/sesion.html";
}

//mostrar datos
 function mostrar(){
   // Rescato la data del localstorage
    var newUser1 = localStorage.getItem('newUser');
    var newPassword1 = localStorage.getItem('newPassword');
    var Category1 = localStorage.getItem('Category');
    // Obtengo los datos del login-----value
    var userName = document.getElementById('user');
    var userPassword = document.getElementById('pass');
    // Comparo si el usuario existe y lo muestro en un alert
     if(userName.value == newUser1 && userPassword.value == newPassword1) {
         alert('El usuario es : '+newUser1
                +'\nsu tipo de rol es: '+Category1);
    }else {
        alert('Error del Dato');
 
   }

   window.location="html/sesion.html";
}