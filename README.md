# Modulo 2 HTML CSS JS
## AE2: 
- Etiquetas H1-H6, p, pre, ol, ul, table, video, audio, form y div
##
##
## AE3: 
- CSS, configuración de carpetas (ruta relativa, ruta absoluta)
- Selectores básicos CSS: etiqueta HTML o clase (.clase), identificador (#id)
- Selectores avanzados: todos los elementos (*), descendente (.clase/#id etiqueta), descendente directo (.clase/#id > etiqueta), atributo (etiqueta[atributo=valor])
- Ejemplos selectores es style1.css
##
- Jerarquía en CSS: ID (#id) > Clase (.class) > elemento/etiqueta (elemento/etiqueta), si dos reglas tienen la misma especificidad, la que se defina más abajo en el código será la que se aplique
- Especificidad = id 1,0,0; class 0,1,0; etiqueta 0,0,1; Ejemplo: div.miClase#miId = 1,1,1
##
- Modelo de caja: Contenido -> relleno o padding (espacio entre contenido y borde) -> borde -> margen (espacio con otros contenedores)
- box-sizing mantiene el tamaño de la caja, va descontando border y padding al content, se usa generalmente en el contenedor padre
- Ejemplo modelo de caja  e inline-block en modelo_cajas.html
##
- Flexbox, Ejemplo en flexbox.*, column.html, 
##
- position.html tiene ejemplo de distintos position
##
- Media Query, mobile first en media_query.*
##
##
## AE4: Bootstrap
- Ejemplos en index.html
##
##
## AE5: JavaScript
- Ejemplos AE5/assets/js/*.js
##
##
## AE6: JQuery
- Ejemplo AE6/assets/js/script.js
##
##
## AE7: GIT
- git config --global user.name = "Laura"
- git config --global user.email = "duhalde.ulloa.laura@gmail.com"

- git init
- git add README.md
- git commit -m "first commit"
- git branch -M main
- git remote add origin git@github.com:LauDuhalde/java0078_modulo2.git
- git push -u origin main

- git pull

- git branch nueva_rama
- git checkout nueva_rama
- git branch -a
- git add .
- git commit -m "mensaje"
- git push -u origin nueva_rama

- git checkout rama_hacia_donde_llevar_cambios
- git merge rama_de_donde_vienen_cambios