
const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})
const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' }
  ];

  app.get('/api/users', (req, res) => {
    res.json(users);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})