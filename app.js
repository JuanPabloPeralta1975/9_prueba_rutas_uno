var express = require('express');

var app = express();

app.listen(3000, function() {
  console.log('corriendo en  el puerto 3000');
});

app.get('/',function(req,res){
  res.send('BIENVENIDOS AL SITIO')
});

app.get('/contato',function(req,res){
  res.send('DEJANOS TU CONTACTO')
});

/* se usa app.get / para la pagina principal
y por ejemplo app.get('/contacto') para la pagina contacto */

app.get('/productos/:idProductos',function(req,res){
  res.send('BIENVENIDO AL PRODUCTO' + req.params.idProductos)
});

app.get('/productos/:idProductos/comentarios',function(req,res){
  res.send('BIENVENIDO AL COMENTARIO DEL PRODUCTO' + req.params.idProductos)
});

/* se usa /:idProductos para usar el id y para eso se usa res.params */




