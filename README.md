# Clima App Consola

Una aplicación de consola para obtener información meteorológica de diferentes ubicaciones.

## Consumo de APIs

En el desarrollo de aplicaciones, a menudo surge la necesidad de interactuar con servidores externos para obtener o enviar datos. Este proceso se realiza mediante llamadas HTTP a través de diferentes métodos y paquetes en el entorno de desarrollo de Node.js.

### Paquete Axios

Axios es una de esas alternativas modernas. Es un cliente HTTP basado en promesas que funciona tanto en el navegador como en Node.js. Proporciona una interfaz simple y fácil de usar para realizar solicitudes HTTP.

### Mapbox Places

Mapbox Places es un servicio que permite buscar lugares por nombre. Utilizando la API de Mapbox Places, puedes obtener información detallada sobre ubicaciones específicas, como coordenadas geográficas, direcciones y más.

### Uso de OpenWeather

OpenWeather es un servicio popular para obtener datos meteorológicos de diferentes ubicaciones en todo el mundo. Ofrece una API que proporciona información sobre el clima actual, pronósticos a corto y largo plazo, datos históricos y más.

### Aplicación de consola con historial

Al desarrollar una aplicación de consola que interactúa con múltiples APIs, es útil implementar un sistema de historial. Esto permite a los usuarios acceder fácilmente a las consultas anteriores y realizar nuevas solicitudes basadas en el historial existente.

### Variables de entorno

El uso de variables de entorno es una práctica común para gestionar configuraciones sensibles, como claves de API y tokens de acceso. Esto ayuda a mantener la seguridad de tu aplicación y evita exponer información confidencial en tu código fuente.

## Para pruebas rápidas del endpoint:

- [reqres.in](https://reqres.in/)
- [Mapbox](https://www.mapbox.com/)
  - Es un servicio que proporciona herramientas para trabajar con mapas y ubicaciones. Ofrece soluciones para mapas personalizados, geolocalización, navegación, y más.
- [Documentación de Mapbox API - Geocoding](https://docs.mapbox.com/api/search/geocoding/)
  - Este enlace te lleva a la documentación específica de la API de Mapbox relacionada con la geocodificación. La geocodificación es el proceso de convertir direcciones u otros nombres de lugares en coordenadas geográficas (latitud y longitud) que puedes utilizar para mostrar la ubicación en un mapa o para realizar análisis espaciales. Esta documentación te proporciona información detallada sobre cómo utilizar la API de geocodificación de Mapbox para realizar estas conversiones.

- [openweather](https://openweathermap.org/)
  - OpenWeatherMap es una excelente fuente de datos meteorológicos que puedes utilizar en tu aplicación para obtener información precisa sobre el clima en diferentes ubicaciones de todo el mundo. Puedes registrarte en su plataforma para obtener una API key que necesitarás para hacer consultas a su API y obtener datos meteorológicos actualizados.

  - Una vez que tengas tu API key, podrás utilizarla en tus solicitudes a la API de OpenWeatherMap para obtener información como la temperatura actual, la temperatura mínima y máxima, la velocidad del viento, la humedad, la descripción del clima, entre otros datos.
