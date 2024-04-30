import "dotenv/config";
import colors from "colors";

import {
  inquirerMenu,
  leerInput,
  listarLugares,
  pausa,
} from "./helpers/inquirer.mjs";
import { Busquedas } from "./models/busquedas.mjs";

const main = async () => {
  const busquedas = new Busquedas();

  let opt = "";
  do {
    opt = await inquirerMenu();

    switch (opt) {
      case 1:
        // Mostrar mensaje
        const termino = await leerInput("Ciudad: ");

        // Buscar los lugares
        const lugares = await busquedas.ciudad(termino);
        //necesito sacar el id
        // Seleccionar el lugar
        const lugarSel = await listarLugares(lugares);
        const lugarId = lugarSel ? lugarSel.id : null;
        if (lugarId === null) {
          console.log("Selección cancelada.");
          continue;
        }
        //guardar en DB
        busquedas.agregarHistorial(lugarSel.full_address);
        //clima
        const clima = await busquedas.climaLugar(
          lugarSel.latitud,
          lugarSel.longitud
        );
        // console.log(clima);

        // Mostrar resultados
        console.clear();
        console.log("\ninformacion de la ciudad\n".green);
        console.log(`Ciudad:`, lugarSel.full_address.green);
        console.log(`Latitud:`, lugarSel.latitud);
        console.log(`Longitud:`, lugarSel.longitud);
        console.log(`Temperatura:`, clima.temp);
        console.log(`Mínima:`, clima.min);
        console.log(`Maxima:`, clima.max);
        console.log(`Como esta el clima:`, clima.desc.green);

        break;
      case 2:
        // busquedas.historial.forEach((lugar, i) => {
        busquedas.historialCapitalizado.forEach((lugar, i) => {
          const idx = `${i + 1}.`.green;
          console.log(`${idx} ${lugar}`);
        });
        break;
    }
    await pausa();
  } while (opt !== 0);
  console.log("Adios");
};

main();
