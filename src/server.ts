import express from 'express';

const app = express();

app.get('/teste', (req, res) => {
  return res.status(200).json({ message: 'Olá NLW'});
})

app.listen(3000, () => console.log('server run'));