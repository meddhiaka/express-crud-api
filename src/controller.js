const fs = require('fs')

let data = JSON.parse(fs.readFileSync('./data/data.json'));

//GET 
function getItems(req, res) {
  res.json(data);
}

//POST
function createItem(req, res) {
  const newItem = req.body
  data.push(newItem)
  fs.writeFileSync("./data/data.json", JSON.stringify(data))
  res.json({"msg": "you succesfully sent the new item"})
}

//PUT

//DELETE

module.exports = {
  getItems,
  createItem
}