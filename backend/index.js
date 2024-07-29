const express = require('express');
const cors = require('cors')
const app = express();
const port = 80;

const corsOptions = {
  origin: 'http://localhost:3000', // Tillåt endast denna domän
};

app.use(cors(corsOptions));

app.get('/api/data', (req, res) => {
  res.json({ message: 'Det här meddelandet kommer från backenden!' });
});

app.listen(port, () => {
  console.log(`Servern körs lokalt på port 80.`);
});
