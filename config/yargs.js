const argv = require("yargs")
  .options("b", {
    alias: "base",
    type: "number",
    demandOption: true, //Hace obligatorio el ingreso del parametro.
    describe: "La base de la multiplicacion"
  })
  .options("l", {
    alias: "imprimir",
    type: "boolean",
    default: false,
    describe: "Permite imprimir la lista"

  })
  .options("h", {
    alias: "hasta",
    type: "number",
    demandOption:true,
    describe: "Permite ingresar hasta cuando imprimir"

  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "la base debe ser un numero";
    }
    return true;
  }).argv;

  module.exports= argv //se le pasa todo el objeto en definitiva.