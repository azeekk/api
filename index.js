const app = require('express')();
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/tshirt', (req, res) => {
  res.status(200).send({
    message: 'T-Shirt',
    color: 'Red',
    size: 'M'
  });
});

app.post('/tshirt/:id', (req, res) => {
  res.status(201).send({
    message: 'T-Shirt created successfully',
    color: 'Red',
    size: 'M'
  });
});
