function escribe() {
 //en este hice que el form con la ID y grupos que seria el select 
    lista = document.elige.grupos
    //en esta se dio la ocpiones del select
    opciones = lista.options
    escribir = document.getElementById("respuesta")
    //devuelve la sintasis
    escribir.innerHTML = ""
    //se pide un para para las opciones y se va pasando uno por uno
    for (i=0;i<opciones.length;i++) {
      if (opciones[i].selected == true ) {
        grupos = opciones[i].text
        escribir.innerHTML += grupos + "<br/>"
      }
    }
   
   
    var num=parseInt(0);
    var precio=699;
    //variable para llamarla en una pantalla como una alerta
    var num=parseInt(prompt("escribe numero"));
   
   //calculo
    precio=precio*num;
    alert('precio total es: '+precio+'$');
    //respuesta del select y del calculo y la pantalla
    escribir = document.getElementById("respuesta3")
    escribir.innerHTML += num
    escribir = document.getElementById("respuesta2")
    escribir.innerHTML += precio 
   
  }