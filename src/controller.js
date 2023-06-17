const fs = require('fs')

let data = JSON.parse(fs.readFileSync('./data/data.json'));

//GET
function getItem(req, res) {
  const itemId = req.params.id
  res.json(data[itemId])
}

//GET 
function getItems(req, res) {
  res.json(data);
}


//POST
function createItem(req, res) {
  const newItem = req.body
  data.push(newItem)
  fs.writeFileSync("./data/data.json", JSON.stringify(data))
  res.json({"msg": "you succesfully added the new item"})
}

//PUT
function updateItem(req, res) {
  const itemId = req.params.id
  const updatedItem = req.body
  data[itemId] = updatedItem
  fs.writeFileSync("./data/data.json", JSON.stringify(data))
  res.json({"msg": "you succesfully updated the item x"})
}

//DELETE
function deleteItem(req, res) {
  const itemId = req.params.id
  data.splice(itemId, 1)
  fs.writeFileSync("./data/data.json", JSON.stringify(data));
  res.json({"msg": "you succesfully deleted the item x"})
}

module.exports = {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem
}