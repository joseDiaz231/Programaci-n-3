const express = require('express');
const app = express();
const { Home, Dashboard } = require('./controller.js');

const port = 4000 || process.env.PORT;


app.set('view engine', 'ejs');
app.set('views', __dirname +'/views');
app.use(express.static(__dirname + '/public'));


//rutas
app.get('/', Home);
app.get('/dashboard', Dashboard);

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});