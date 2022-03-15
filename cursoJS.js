let formu = document.getElementById("cotizacion")
var precio = []
const div__creado = document.querySelector("section__cont")

const dest = document.getElementById("inputDestino") 

switch (dest) {
    case '1':
        destino = 750000;
        break;
    case '2':
        cantidad = 700000;
        break;
    case '3':
        cantidad = 650000;
        break;
}

const RecibirInfo = ()=>{

/*Recibo la información del formulario*/
let x = formu.addEventListener("submit", cotizar)
function cotizar (e){
    
    /*Default*/   
    e.preventDefault(e)

    /*capturo mi html*/   
    let form = e.target

    /*imprimo en los cont hijos en cierta posición para obtener info. del Form*/
    const destino = form.children[1].value
    const personas = form.children[2].value
 
    precio.push(destino,personas)

    

    const agregar = document.createElement("div")
    agregar.classList.add("section__cont")
    const add = document.createElement("ul")
    add.classList.add("ul__class")
   

    add.innerHTML = '<li> Precio total $ 700000 )</li>'
    //devuelve el valor del input en mi HTML
    agregar.innerHTML = '<img src="./imagenes/logo1.png" class="lg">'
    
    agregar.appendChild(add)
    dest.appendChild(agregar)

}
}


console.log(precio)
RecibirInfo()