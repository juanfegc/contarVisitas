#contarVisitas
Esta app, dependiendo de la url que se use, hará lo siguiente:
- http://contarvisitas.herokuapp.com/ --> cuenta y muestra el número de visitantes que recibe la web
- http://contarvisitas.herokuapp.com/json --> muestra la estadística de número de visitantes en formato json.

#PASO A PASO Node.js/Heroku
Como desplegar mi app Node.js en un PaaS como [Heroku], comentado paso a paso.

[Heroku]:http://www.heroku.com

# ![GitHub](http://www.grails48.com/static/images/github-logo3.png)
Creamos un nuevo repositorio remoto en [GitHub] para nuestra app (http://github.com/juanfegc/contarVisitas.git).

[GitHub]:https://github.com/

# ![Git](http://git-scm.com/images/logo@2x.png)
Iniciamos el control de versiones del directorio local de nuestro proyecto, agregamos todos los archivos,
guardamos, lo enlazamos con nuestro repositoiro remoto en GitHub y subimos los cambios.
``` sh
cd contarVisitas
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/juanfegc/contarVisitas.git
git push -u origin master
```

# ![Node.js](http://nodejs.org/images/logos/nodejs.png)
En el directorio raiz de nuestra app creamos un archivo **package.json** para declarar todas las dependencias de mi app (express, logfmt) y las instalamos con npm.
``` sh
cd contarVisitas
npm init
npm install express logfmt --save
```
También creamos un archivo **Procfile**
con el contenido siguiente `web: node server.js` para indicarle a heroku como ejecutar mi app.

# ![Heroku](http://www.treasuredata.com/img_logos/heroku.png)
Necesitamos instalar la herramienta [Heroku toolbelt] para poder usar el cliente heroku en la linea de comandos.

[Heroku toolbelt]:https://toolbelt.heroku.com/

Antes de nada guardamos todos los cambios en Git/GitHub antes de desplegar en heroku
```sh
git add .
git commit -m "first deployment"
git push -u origin master
```

Probamos la app localmente en [http://localhost:5000] antes de subirla a Heroku
[http://localhost:5000]:http://127.0.0.1:5000

```
foreman start
```

Accedemos a heroku desde el terminal con nuestro user y password y creamos nuestra webapp en heroku.
``` sh
heroku login
heroku create
```

Desplegamos nuestra app en Heroku.
``` sh
git push heroku master
```
(opcional) renombramos el nombre de la webapp que heroku nos asignó por defecto cuando lo creamos con el comando `heroku create` en mi caso fué (http://limitless-island-6137.herokuapp.com/) y la voy a cambiar por (http://contarvisitas.herokuapp.com/).
``` sh
heroku apps:rename contarvisitas
```
Abrimos la app en nuestro navegador
``` sh
heroku open
```
Consultamos el log de Heroku
``` sh
heroku logs
```

**by J.Fernando Godoy Caba**
