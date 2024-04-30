import axios from "axios";
import fs from "fs";

class Busquedas {
  // historial = ["Tegucigalpa", "Madrid", "Lima", "Bogota"];
  historial = [];
  dbPath = "./db/database.json";

  constructor() {
    this.leerDB();
  }

  get historialCapitalizado() {
    return this.historial.map((lugar) => {
      let palabras = lugar.split(" ");
      palabras = palabras.map((p) => p[0].toUpperCase() + p.substring(1));
      return palabras.join(" ");
    });
  }

  paramsMapbox(lugar) {
    return {
      q: lugar,
      limit: 5,
      language: "es",
      access_token: process.env.MAPBOX_KEY,
    };
  }

  paramsWeather(lat, lon) {
    return {
      lat,
      lon,
      appid: process.env.OPENWEATHER_KEY,
      units: "metric",
      lang: "es",
    };
  }

  async ciudad(lugar = "") {
    try {
      const instance = axios.create({
        baseURL: "https://api.mapbox.com",
        params: this.paramsMapbox(lugar),
      });

      const resp = await instance.get("/search/geocode/v6/forward");

      // Procesar la respuesta para obtener el full_address, longitud y latitud de cada lugar
      const lugares = resp.data.features.map((feature) => {
        // Verificar que todas las propiedades necesarias estén presentes antes de intentar acceder a ellas
        const full_address = feature.properties?.full_address || "";
        const longitud = feature.geometry?.coordinates?.[0] || 0;
        const latitud = feature.geometry?.coordinates?.[1] || 0;

        return {
          full_address,
          longitud,
          latitud,
        };
      });

      // console.log(lugares);
      return lugares;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async climaLugar(lat, lon) {
    try {
      const instance = axios.create({
        baseURL: "https://api.openweathermap.org/data/2.5/weather",
        params: this.paramsWeather(lat, lon),
      });

      const resp = await instance.get();
      // console.log(resp);

      const { weather, main } = resp.data;

      return {
        desc: weather[0].description,
        min: main.temp_min,
        max: main.temp_max,
        temp: main.temp,
      };
    } catch (error) {
      console.log(error);
    }
  }

  agregarHistorial(lugar = "") {
    if (this.historial.includes(lugar.toLocaleLowerCase())) {
      return;
    }
    this.historial = this.historial.splice(0, 5);
    //prevenir duplicados
    this.historial.unshift(lugar.toLocaleLowerCase());
    //grabar en DB
    this.guardarDB();
  }

  guardarDB = () => {
    const payload = {
      historial: this.historial,
    };
    try {
      fs.writeFileSync(this.dbPath, JSON.stringify(payload));
      // console.log("DB guardada");
    } catch (error) {
      console.error("Error al guardar la DB:", error);
    }
  };

  leerDB = () => {
    if (!fs.existsSync(this.dbPath)) return;

    const info = fs.readFileSync(this.dbPath, { encoding: "utf-8" });
    const data = JSON.parse(info);
    this.historial = data.historial;
  };
}

export { Busquedas };
