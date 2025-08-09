let amigos = [];

function vaciarInput(){ //Esto sirve para vaciar la caja del input, en otras palabras dejarlo en blanco 
    let vaciador = document.getElementById("amigo") // se accede al input 
    vaciador.value = "" // Esto sirve para modificar el contenido 
}


function agregarAmigo() { //Sirve para agregar a las personas cada vez que se toque el boton de agregar
    
    let amigo = document.getElementById("amigo").value; 

    if (amigo.trim() === ""){ //Si la entrada esta vacia dara error
        alert ("Entrada no valida");
    } else { //Si la entrada es valida se agregara al array amigo
        amigos.push (amigo);
    } 
    
    listaDeAmigos();
    vaciarInput();
    return;
}



function listaDeAmigos (){ //Ayuda a crear una lista y actualizarla
    let obtenerListaAmigos = document.getElementById("listaAmigos") ;
    obtenerListaAmigos.innerHTML = "" ;

    //Cada vez que se toque el boton agregar esto hara una nueva linea con cada persona agregada
    for (let recorridoLista = 0 ; recorridoLista < amigos.length; recorridoLista++ ){ 
        obtenerListaAmigos.innerHTML += "<li>" + amigos[recorridoLista] + "</li>"; // va a imprimir la lista en la pantalla
    }

}


//Sirve para escoger un amigo al azar y hacerlo el amigo secreto
// Muy importante debe haber como minimo 2 personas para que funcione
function sortearAmigo(){
    let cantidadAmigos = amigos.length;
    let imprimirResultado = document.getElementById("resultado");
    if (cantidadAmigos >= 2) {
        let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
        let sorteador = amigos[indiceAmigo];
        imprimirResultado.innerHTML = `El amigo secreto es ${sorteador}`;
        //Esta parte de abajo es puramente visual
        //Lo que hace es que cada vez que se toque el boton de sortear desaparezca la lista de personas
        //Pero solo de forma visual, aun seguira guargando todos los valores.
        let obtenerListaAmigos = document.getElementById("listaAmigos") ;
        obtenerListaAmigos.innerHTML = "";
    } else {
        alert ("No hay suficientes amigos para realizar el sorteo");
    }

}