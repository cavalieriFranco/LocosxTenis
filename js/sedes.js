let informacion = "https://github.com/cavalieriFranco/LocosxTenis/blob/master/js/sedes.js";

$.getJSON(informacion, function (respuesta,estado){
    if(estado === "success"){
        let dato = respuesta;
        for (const dato of respuesta){
            $("#sedes").append (`
                <div>
                    <h5>${dato.nombre}</h5>
                    <p class="card-text"> Direccion: ${dato.direccion}</p><br>
                    <p class="card-text">Telefono : ${dato.telefono}</p><br>
                </div>
            `)
        }
    }
})
