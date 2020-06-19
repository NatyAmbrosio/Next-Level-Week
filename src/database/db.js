const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
db.serialize(() => {
            //    db.run(`
            //       CREATE TABLE IF NOT EXISTS places (
            //            id INTEGER PRIMARY KEY AUTOINCREMENT,
            //                image TEXT,
            //                name TEXT,
            //                address TEXT,
            //                address2 TEXT,
            //                state TEXT,
            //                city TEXT,
            //                items TEXT
            //        );
            //`)

            //const query = `
            //  INSERT INTO places (
            //      image,
            //      name, 
            //      address,
            //      address2, 
            //      state, 
            //      city, 
            //      items
            //)     VALUES (?,?,?,?,?,?,?);
            //`

            //const values = [
            //  "https://images.unsplash.com/photo-1563898646259-57cd9610665d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",,
            //  "Colectoria",
            //  "Guilherme Gemballa, Jardim América",
            //  "Nº260",
            //  "Santa Catarina",
            //  "Rio do Sul",
            //  "Resíduos Eletrônicos, Lâmpadas"
            //   ]

            //inserir dados
            // function afterInsertData(err) {
            //      if (err) {
            //         return console.log(err)
            //      }
            //  console.log("Cadastrado com sucesso")
            //  console.log(this)
            //}
            // db.run(query, values, afterInsertData)


            //selecionar do banco de dados
            //db.all(`SELECT * FROM places`, function(err, rows) {
            //  if (err) {
            //          return console.log(err)
            //  }

            //  console.log("Aqui estão seus registros")
            //  console.log(rows)
            //})


            //deletar do banco de dados
            //db.run(`DELETE FROM places WHERE id= ?`, [8], function(err) {
            //    if (err) {
            //        return console.log(err)
            //    }
            //    console.log("Registro deletado com sucesso!")
            //})