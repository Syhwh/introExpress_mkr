function DataBase() {
  this.names = []
  this.saveName = (name) => this.names.push({
    id: this.names.length + 1,
    name
  })
}


/// CRUD 
// Create
// READ
// Update
// Delete

const db = new DataBase()

db.saveName('pepe')


db.loquesea()
console.log(db.names)