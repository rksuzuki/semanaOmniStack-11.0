const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.send({
    evento: 'Semana Omnistack 11.0',
    aluno: 'Rodrigo Suzuki'
  })
});

app.listen(3333);

