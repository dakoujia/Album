const express = require("express");

const app = express();

app.set('secret', 'i2u34y12oi3u4y8')

require('./routes/admin')(app);

app.listen(3000, () => {
  console.log('http://localhost:3000');
});