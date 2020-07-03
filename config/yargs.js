const descripcion = {
        demand: true,
        alias: 'd',
        desc: 'Describe todo el rollo del task a realizar caon'
};

const completado = {
            default: true,
            alias: 'c',
            desc: 'Marca como completado o pendiente tu task'
};

const argv = require('yargs')

    .command('crear', 'crea una tarea por hacer', {
    descripcion
    })

    .command('actualizar', 'Actualiza el estado completado de un task',  {

    descripcion, completado
    })

    .command('borrar', 'borra un task',  {

        descripcion
        })
   

    .help()
    .argv;

    module.exports = {
        argv
    }