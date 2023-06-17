const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/items', controller.getItems);
app.get('/items/:id', controller.getItem);
app.post('/items', controller.createItem);
app.put('/items/:id', controller.updateItem);
app.delete('/items/:id', controller.deleteItem);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});