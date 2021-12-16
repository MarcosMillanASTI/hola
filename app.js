// Para empezar a utilizar el programa ejecutar 'npm install'
// Se descargaran todas las dependencias necesarias para la ejecucion

// Inicializar repositorio: git init

// git add .  // todos los cambios desde el ultimo commit
// 
// git commit -m "Primer commit" // ej
// git checkout --. // restaurar ultimo punto

// despues se enlaza con github

console.clear();

//Impoprtaciones
const {crearArchivoMultiplicar} = require('./libreria_personal/tabla_multiplicar');
const argv = require('./conifg/yargs');
const color = require('colors');


crearArchivoMultiplicar(argv.base, argv.r, argv.l)
    .then(nombreArchivo => console.log('\n' + nombreArchivo.rainbow + ' creado'))
    .catch(err => console.log(err))
