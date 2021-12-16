
console.clear();

//Impoprtaciones
const {crearArchivoMultiplicar} = require('./libreria_personal/tabla_multiplicar');
const argv = require('./conifg/yargs');
const color = require('colors');


crearArchivoMultiplicar(argv.base, argv.r, argv.l)
    .then(nombreArchivo => console.log('\n' + nombreArchivo.rainbow + ' creado'))
    .catch(err => console.log(err))
