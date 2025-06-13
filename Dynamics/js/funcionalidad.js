let imgselec = document.getElementsByClassName("Opciones");//Obtine los elementos de la clase Opciones (3 elementos)
let seleccion = document.getElementById("Seleccionada");//Obtiene el elemento que se muestra cuando tu seleccionas una opción
let Rival = document.getElementById("Rival");//Obtiene el elemento que muestra la opción elegida por la computadora
let rutas = ["../Statics/img/piedra.png","../Statics/img/papel.png","../Statics/img/tijeras.png"];//Arreglo con las rutas de las imagenes
let opciones = ["Piedra", "Papel", "Tijeras"];//Arreglo con los nombres de las imagenes/opciones


//Función para mostrar la opción elegida por la computadora cuando se confirma la opción elegida(por el usuario)
function elegir()
{
    let aleatorio = Math.floor(Math.random()*10) % 3;//Aleatorio entre el 1 y 3
    let seleccionado = seleccion.getAttribute("alt");//Se obtiene el nombre almacenado en la imagen seleccionada
    let pierdeCon = (aleatorio+1 > 2)? 0: aleatorio+1;//Se obtiene la opción con la que perdería la computadora

    //Se cambia la imagen del "rival" con la imagen seleccionada por la computadora
    Rival.setAttribute("src", rutas[aleatorio]);

    //Se muestra si se ganó, se empató o se perdió
    if(seleccionado != opciones[aleatorio])
        (opciones[pierdeCon] == seleccionado)? console.log("Ganaste") : console.log("Perdiste");
    else
        console.log("Empate");
}


//Eventos para cuando se pasa el mouse sobre la imagen, cuando se quita el mouse y cuando se da click a la imagen (imagen 1)
imgselec.item(0).addEventListener("mouseover",()=>
{
    seleccion.setAttribute("src", rutas[0]);
    seleccion.setAttribute("alt", opciones[0]);
});

imgselec.item(0).addEventListener("mouseout",()=>
{
    seleccion.setAttribute("src", "../Statics/img/yippe.png");
    seleccion.setAttribute("alt", "seleccion");
});

imgselec.item(0).addEventListener("click",()=>{
    elegir()
});


//Eventos para cuando se pasa el mouse sobre la imagen, cuando se quita el mouse y cuando se da click a la imagen (imagen 2)
imgselec.item(1).addEventListener("mouseover",()=>
{
    seleccion.setAttribute("src", rutas[1]);
    seleccion.setAttribute("alt", opciones[1]);
});

imgselec.item(1).addEventListener("mouseout",()=>
{
    seleccion.setAttribute("src", "../Statics/img/yippe.png");
    seleccion.setAttribute("alt", "seleccion");
});

imgselec.item(1).addEventListener("click",()=>{
    elegir()
});


//Eventos para cuando se pasa el mouse sobre la imagen, cuando se quita el mouse y cuando se da click a la imagen (imagen 3)    
imgselec.item(2).addEventListener("mouseover",()=>
{
    seleccion.setAttribute("src", rutas[2]);
    seleccion.setAttribute("alt", opciones[2]);
});

imgselec.item(2).addEventListener("mouseout",()=>
{
    seleccion.setAttribute("src", "../Statics/img/yippe.png");
    seleccion.setAttribute("alt", "seleccion");
});

imgselec.item(2).addEventListener("click",()=>{
    elegir()
});