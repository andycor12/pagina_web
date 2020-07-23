const snombre = document.getElementById('textnombre'),
    sapellido = document.getElementById('textapellido'),
    sapellido2 = document.getElementById('textapellido2'),
    stelefono = document.getElementById('telefono'),
    sdocumento = document.getElementById('textdocumento'),
    ssangre = document.getElementById('textgrupo'),
    scorreo = document.getElementById('correo'),
    subicacion = document.getElementById('textubicacion'),
    smensaje = document.getElementById('textmensaje')

const id = document.getElementById("saveUser")

id.addEventListener('click', saveUser);

const friendList = [];

function saveUser() {
    const newUser = {
        nombre: snombre.value,
        primerApellido: sapellido.value,
        segundoApellido: sapellido2.value,
        telefono: stelefono.value,
        documento: sdocumento.value,
        sangre: ssangre.value,
        correo: scorreo.value,
        ubicacion: subicacion.value,
        mensaje: smensaje.value,

    };
    friendList.push(newUser);
    localStorage.setItem('localFriendList', JSON.stringify(friendList));
}

function drawfriendsTable() {
    let list = JSON.parse(localStorage.getItem('localFriendList'));
        tbody = document.querySelector('#friendsTable tbody');
    tbody.innerHTML = '';

    for (let i = 0; i < list.length; i++) {
        let row = tbody.insertRow(i);
        let nameCell = row.insertCell(0),
            apellidoCell = row.insertCell(1),
            apellido2Cell = row.insertCell(2)
            telefonoCell = row.insertCell(3),
            adocumento = row.insertCell(4),
            asangre = row.insertCell(5),
            acorreo = row.insertCell(6),
            aubicacion = row.insertCell(7),
            amensaje = row.insertCell(8),
            selectCell = row.insertCell(9)



        nameCell.innerHTML = list[i].nombre;
        apellidoCell.innerHTML = list[i].primerApellido;
        apellido2Cell.innerHTML = list[i].segundoApellido;
        telefonoCell.innerHTML = list[i].telefono;
        adocumento.innerHTML = list[i].documento;
        asangre.innerHTML = list[i].sangre;
        acorreo.innerHTML = list[i].correo;
        aubicacion.innerHTML = list[i].ubicacion;
        amensaje.innerHTML = list[i].mensaje;


        let inputSelect = document.createElement('input');
        inputSelect.type = 'radio';
        inputSelect.value = list[i];
        selectCell.appendChild(inputSelect);


        tbody.appendChild(row);
    }
}