# ExpressJS CRUD App

Simple CRUD App serving a local JSON file called `data.json` with 2 GET, POST, PUT and DELETE http requests, main idea of reading, updating and deleting items.

### Basic setup

* Clone the repository with this command `git clone this_repo_link.git`

* Install the node modules `npm i`, Make sure that your terminal is pointed in repo root.  

* Create a file named `data.json` inside `data` folder name with an empty array like this `[]`, so we specify the JSON type of file, avoiding errors in the terminal...

### Testing with CURL

* Read just one item by its ID
  
  ```
  $ curl -X GET localhost:3000/items/<your_preferred_id>
  ```

* Read all items
  
  ```
  $ curl -X GET localhost:3000/items
  ```

* Delete an item by its ID
  
  ```
  $ curl -X DELETE localhost:3000/items/<your_preferred_id>
  ```

* Add an item
  
  ```
  $ curl -X POST -H "Content-Type: application/json" -d '{"example": "example"}'
  ```

* Update an item
  
  ```
  $ curl -X PUT -H "Content/Type: application/json" -d '{"example": "example"}' localhost:3000/item/<your_preferred_id>
  ```

# Give us a little star, so appreciated.
