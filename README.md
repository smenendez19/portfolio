# Portafolio - Santiago Menendez

## Descripcion

Proyecto web de portafolio hecho desde 0 usando Vue y Vuetify.

## Uso e implementacion

Descargate el proyecto y una vez descargado para probarlo tira las siguientes lineas de comandos desde la carpeta del proyecto (con npm instalado):

Para testearlo en desarrollo

`npm run dev`

Construir la distribucion

`npm run build`

Testear la distribucion creada

`npm run preview`

## Librerias

Las librerias que utiliza el portfolio son las siguientes:

- Vue 3
- Vuetify 3
- Material Design Icons
- I18N
- Vite
- Vue Router
- Eslint

## Deploy

Para implementar en Github Pages, se debe realizar lo siguiente:

- Descargar el repositorio publico, o en todo caso realizar un fork y crear un repositorio aparte.
- Ejecutar npm install para instalar todas las librerias necesarias
- Ejecutar npm run build para construir los archivos estaticos
- Realizar un push con el comando git subtree push --prefix dist origin gh-pages para subir los cambios.
- Esperar a que se termine de implementar en Github y ya tendras la pagina estatica activa.
