const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let ubicacion = { lat: 0, lng: 0 };

app.post('/ubicacion', (req, res) => {
  ubicacion = req.body;
  res.send({ status: 'ok' });
});

app.get('/ubicacion', (req, res) => {
  res.json(ubicacion);
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});