import express from 'express';

const app = express();

app.use('/', (req, res) => {
  return res.json('Hello World!');
});

app.listen(8000, () => {
  console.log('App listening on port 8000');
});
