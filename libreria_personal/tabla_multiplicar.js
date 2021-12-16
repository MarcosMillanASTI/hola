
const fs = require('fs');

const color = require('colors');

const crearArchivoMultiplicar = async( numero = 5, repticiones = 10 , listar = false) =>{
    let salida= ''

    console.log(`- - - - - - - - - - - - - - - - - - - -`.rainbow)
    console.log(` - - - - - - - - - - - - - - - - - - - `.rainbow)
    console.log(`\t-  La base yargs: ${numero}`.green)
    if(listar){
        console.log(`\t-  Listar:  ${listar}`.blue)
    }
    if(repticiones){
        console.log(`\t-  Rango: ${repticiones}`.yellow)
    }
    console.log(`- - - - - - - - - - - - - - - - - - - -`.rainbow)
    console.log(` - - - - - - - - - - - - - - - - - - - `.rainbow)

    for(let secuencia = 1; secuencia<=repticiones; secuencia++){
        salida += `\t\t${numero} x ${secuencia}  = ${numero * secuencia}\n`;
    }

    if (listar){
        console.log('\t    --------------------'.rainbow)
        console.log(`\t\tTabla del ${numero}`.random)
        console.log('\t   --------------------'.rainbow)
        console.log(salida.random)
    }

    try {
        fs.writeFileSync(`./salida/tabla-${numero}.txt`, salida)
        return (`tabla-${numero}.txt`)
    } catch (error) {
        throw error;
    }
    
}

module.exports = {
    crearArchivoMultiplicar
}