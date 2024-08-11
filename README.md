# Portfolio - Santiago Menendez

## Descripcion

Proyecto web de portfolio hecho desde 0 usando Vue y Vuetify.

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
- Material Design Icons (MDI)
- I18N
- Vite
- Vue Router
- Eslint

## Deploy

Para implementar en Github Pages, se debe realizar lo siguiente:

- Descargar el repositorio publico, o en todo caso realizar un fork y crear un repositorio aparte.
- Ejecutar npm install para instalar todas las librerias necesarias
- Ejecutar npm run build para construir los archivos estaticos
- Ejecutar los siguientes comandos para subir los archivos a la rama gh-pages:

        git add dist -f && git commit -m "Upload to gh-pages"
        git push origin \`git subtree split --prefix dist master\`:gh-pages --force
        git reset --hard HEAD^1

Nota: Por lo general hay otras formas de hacerlo, pero no terminaban por actualizar la rama y por lo tanto no funcionaron.

- Esperar a que se termine de implementar en Github y ya tendras la pagina estatica activa.
