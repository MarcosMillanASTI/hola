

/*
//Obtener argumentos en la ejecucion
const { argv, argv } = require('process');
const [ , , arg3='base=5'] = process.argv;
const [ , base = 5 ] = arg3.split('=');
*/

const { describe } = require('yargs');


const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        description: 'Numero por el que se multiplica'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        default: false,
        describe: 'Mostrar el resultado'
    })
    .option('r', {
        alias: 'rango',
        type: 'number',
        demandOption: false,
        default: 10,
        description: 'Hasta que numero se va a multiplicar'
    })
    .check((args, options)=>{
        if(isNaN(args.b)){
            throw 'La base tiene que ser un numero.'
        }
        return true
    })
    .argv; // Mejora la lectura de argumentos en terminal




module.exports = argv;