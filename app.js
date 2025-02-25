// 3dd1

const lista__amigos = [];
const nombre_amigo = document.getElementById("nombre_nuevo_amigo");
const lista__amigos__html = document.getElementById("listaAmigos");

function Agregar_Amigo () {
    // Validar que la entrada NO este vacia
    if (nombre_amigo.value == "") {
        alert("Entrada vacia\nIngrese un Nombre");
        return;
    }
    
    //Agregar nombre_amigo a lista__amigos
    lista__amigos.push(nombre_amigo.value);
    // Limpia el Input del html
    document.getElementById("nombre_nuevo_amigo").value = '';

    visualizar_lista();
}

function visualizar_lista () {
    // Recorre cada nombre de la lista y la incluye al HTML
    // Usando un arrelglo para agregar el nombre a una <li>
    let arreglo = "";
    for (let i of lista__amigos) {
        arreglo += ("<li>" + i + "</li>");
        lista__amigos__html.innerHTML = arreglo;
    }
    //console.log(lista__amigos);
}

function sortearAmigo (){
    const indiceAleatorio = Math.floor(Math.random() * lista__amigos.length);
    // Limpia la Lista del HTML
    lista__amigos__html.innerHTML = ''; 
    // Mostrar el nombre sorteado
    lista__amigos__html.innerHTML = lista__amigos[indiceAleatorio];
}