var friendList = [];

function addFriend(pnombre, papellido, papellido2, ptelefono, pdocumento, pgrupo, pcorreo, pubicacion, pmensaje) {
    var newUser = {
        Nombre: pnombre,
        Primer_apellido: papellido,
        Segundo_apellido: papellido2,
        Telefono: ptelefono,
        Numero_de_documento : pdocumento,
        Grupo_Sanguineo: pgrupo,
        Correo_electronico: pcorreo,
        Ubicacion: pubicacion,
        Mensaje: pmensaje

    };
    friendList.push(newUser);
    localStorgeFriendList(friendList);
    
    snombre = " "

}
function getUserlist() {
    var storedList = localStorage.getItem('localFriendList');
    if (storedList == null) {
        friendList = [];
    } else {
        friendList = JSON.parse(storedList);
    }
    return friendList;
}

function localStorgeFriendList(plist) {
    localStorage.setItem('localFriendList', JSON.stringify(plist));

}