# mibicitubici-opendata
API para obtener la informacion de las bicicletas publicas de la ciudad de Rosario

#Uso
```bash
npm install --save mibicitubici-opendata
```

```javascript
import api from 'mibicitubic-open-data'
api().then( (estaciones) => {
  // implementar mi codigo con el resultado de las estaciones
})
```

#Formato de la respuesta
```json
[ 
  ["Pellegrini","-32.953886","-60.656628",
  "","I","EO","13","13","7","Est_Normal 1","./img/ico_off.png",
  "1","MuseoCastagnino","fuera de servicio</br>Permite sólo devolución de la bici."
  ],
...
]
```

#Crear mi propio server en Heroku
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Urucas/mibicitubici-opendata)

[https://mibicitubici.herokuapp.com/](https://mibicitubici.herokuapp.com/)

#Licencia
La informaci&oacute;n es obtenida en tiempo real desde el sitio provisto por la
municipalidad de Rosario, [http://www.mibicitubici.gob.ar/estacione.aspx](http://www.mibicitubici.gob.ar/estacione.aspx)
