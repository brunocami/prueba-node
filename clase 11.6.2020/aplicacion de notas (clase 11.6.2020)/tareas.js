const fs = require('fs');


function leerArchivoJSON(){
    const tareasJson = fs.readFileSync('./tareas.json', 'utf-8');
    return JSON.parse(tareasJson);
}

//function escribirArchivoJSON()
function escribirArchivoJSON(tareas){
    let tareasJson = JSON.stringify(tareas, null, ' ');
    fs.writeFileSync('./tareas.json', tareasJson);
}






function todas(){
    let tareas = leerArchivoJSON();

    tareas.forEach(element => {
    console.log("titulo: " + element.titulo);
    console.log("descripción: " + element.descripcion);
    console.log("estado: " + element.estado);
    console.log();
    });
}
function pendientes(){
    let tareas = leerArchivoJSON();
    let fechaVencimiento = new Date();
            fechaVencimiento.setDate(fechaVencimiento.getDate() + 2);
            let tareasFiltradas = tareas.filter(elem => elem.estado == 'pendiente');
            tareasFiltradas.forEach(element => {
                console.log("titulo: " + element.titulo); 
                console.log("descripción: " + element.descripcion);
                console.log("vence: " + fechaVencimiento);
            });
        }
function enProgreso(){
    let tareas = leerArchivoJSON();
    let fechaIniciado = new Date();
            fechaIniciado.setDate(fechaIniciado.getDate() - 2);
            let tareasEnProgreso = tareas.filter(element => element.estado == "en progreso");
            tareasEnProgreso.forEach(element => {
                console.log("titulo: " + element.titulo);
                console.log("descripcion: " + element.descripcion);
                console.log("inició: " + fechaIniciado);
            });
}
function finalizado(){
    let tareas = leerArchivoJSON();
    let tareasFinalizadas = tareas.filter(elem => elem.estado == 'finalizado');
    tareasFinalizadas.forEach(propiedad => { 
        console.log("titulo: " + propiedad.titulo); 
        console.log("descripción: " + propiedad.descripcion);
        console.log("finalizado: " + new Date());
    });
}
function crear(titulo, descripcion = '', estado = 'pendiente'){
        let tareas = leerArchivoJSON();    
        let tareaNueva = {
            titulo: titulo,
            descripcion: descripcion,
            estado: estado
        }
        tareas.push(tareaNueva);
       
        escribirArchivoJSON(tareas);
        console.log('Tarea creada con exito!');
    }
function borrar(titulo){
    let tareas = leerArchivoJSON();  
    let tareasActualizadas = tareas.filter(
        function(tarea) {
            return titulo !== tarea.titulo;
        }
    );
    
    if (tareas.length !== tareasActualizadas.length){
        escribirArchivoJSON(tareasActualizadas);
        console.log('Tarea borrada con éxito!');
    } else {
        console.log('No encontré esa tarea');
    }
}
module.exports = {
    todas: todas,
    pendientes: pendientes, //se puede escribir pendiente solo, ya que la propiedad y el nombre de la propiedad son iguales
    crear: crear,
    enProgreso: enProgreso,
    finalizado: finalizado,
    borrar: borrar
}
