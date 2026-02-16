const express = require('express'); // Express importeren
const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
  res.send('Hallo wereld!');
});


app.listen(PORT, () => {
  console.log(`Server draait op http://localhost:${PORT}`);
});