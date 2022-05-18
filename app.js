//const fs = require ('fs');
//De esta manera desestructuramos el objeto llamado.
const { options, boolean, demandOption } = require("yargs");
const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
//console.log(argv);
//
//console.log(`La base es:${argv.b}`);

crearArchivo(argv.b, argv.l,argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo))
  .catch((error) => console.log(err));

//console.log('listo');*/
