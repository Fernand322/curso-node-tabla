const fs = require("fs");

const crearArchivo = async (base,imprimir,hasta) => {
 // console.clear();
//Trabajarlo con el try, me ayuda a tratar un posible error, y mandarlo al codigo principal.
//en caso de fallar, el catch lanza el error al otro catch.
  try {
    let salida = "";
    for (let i = 1; i <= hasta; i++) {
      let valor = base * i;
      salida += `el valor de ${base} por ${i} es igual a ${valor} \n`;
    }
    if (imprimir) {
      console.log(salida)
    }
    fs.writeFile(`./salida/tabla-${base}.txt`, salida, (err) => {
      if (err) throw err;
    });
    return `tabla del ${base} creada`;
  } catch (error) {
    throw error;
  }
};
//Permite exportar el modulo para poder llamar desde otra parte del codigo. Se define un objeto y ese se llama desde la otra funcion.

module.exports = {
  crearArchivo,
};
