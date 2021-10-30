$(".botones").append (`
<br><button type="submit">Enviar</button><br><br>
`)

$(".formulario").submit((e) => {

        e.preventDefault();

        let fields = e.target.children

        let options = fields.categoria.children.select.children;
        let categoria = "";
        Array.from(options).forEach(element => {
                if (element.selected) {
                        categoria = element.value;
                }
        });

        let datos = {}
        datos["nombre"] = fields.nombre.value;
        datos["edad"] = fields.edad.value;
        datos["telefono"] = fields.telefono.value;
        datos["horarios"] = fields.horarios.value;
        datos["categoria"] = categoria;
        datos["comentarios"] = fields.comentarios.value;

        localStorage.setItem(`datos1vs1`, JSON.stringify (datos))
})

$("#tituloPartidos").css("color","rgba(245, 245, 245, 0.543)")
        .css("font-size", "30px")
        .css("background-color", "black")
        .css("position", "relative")
        .slideUp(2000)
        .delay(1000)
        .slideDown(2000);
        
        