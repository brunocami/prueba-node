
// tareas.forEach(element => {
//     console.log(element.titulo);
// });

//let parametros = process.argv;



const tareas = require('./tareas');


let accion = process.argv[2];
let parametros = process.argv.slice(3);


switch (accion) {
    
    case 'crear':
        tareas.crear(parametros[0], parametros[1], parametros[2])
         break;

     case 'borrar':
        tareas.borrar(parametros[0]);
         break;
    
    case 'todas':
            tareas.todas()
        break;
        case 'pendiente':
            tareas.pendientes();
        break;
        case 'enProgreso':
            tareas.enProgreso();
            break;
         case 'finalizado':
            tareas.finalizado();
             break;
    default:
        console.log();
        console.log('No entiendo eso');
}
