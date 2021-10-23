
$(".botones").append (`
<br><button type="submit">Enviar</button><br><br>
`)

$(".formulario").submit((e)=>{
e.preventDefault();

let hijos = $(e.target).children();

console.log ("Nombre: " + hijos[1].value);
console.log ("Edad: " + hijos[3].value);
console.log ("Telefono: " + hijos[5].value);
console.log ("Horarios disponibles:" + hijos[7].value);


})

$("#tituloPartidos").css("color","rgba(245, 245, 245, 0.543)")
        .css("font-size", "30px")
        .css("background-color", "black")
        .css("position", "relative")
        .slideUp(2000)
        .delay(1000)
        .slideDown(2000);
        