//importando a dependência do sqlite3 e mandando retornar mensangem no terminal com o verbose()
const sqlite3 = require("sqlite3").verbose()

//criando o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")


module.exports = db
//utilizando o objeto de banco de dados para as operações
db.serialize(() => {
//     //criando uma tabela
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         )
//     `)

//     //inserindo dados na tabela
//     const query =`
//     INSERT INTO places(
//         image,
//         name,
//         address,
//         address2,
//         state,
//         city,
//         items
//     )VALUES (?,?,?,?,?,?,?);
//     `

//     const values = [
//         "https://images.unsplash.com/photo-1558119046-bf5375f0a4af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
//         "Lixão de Ocara",
//         "Christian Castro, Sede-Centro",
//         "Número 180",
//         "Ceará",
//         "Ocara",
//         "Resíduos Eletrônicos, Lãmpadas"
//     ]

//     function afterInsertData(err){
//         if(err){
//             return console.log(err)
//         }

//         console.log("Cadastrado com sucesso!")
//         console.log(this)
//     }





//     db.run(query, values, afterInsertData)  




// // ----CONSULTANDO DADOS NA TABELA-----------------------------------------
//     // db.all(`SELECT name FROM places`, function(err, rows){
//     //     if(err){
//     //         return console.log(err)
//     //     }
//     //     console.log("Aqui estão seus registros: ")
//     //     console.log(rows)
//     // })
// // -------------------------------------------------------------------------


// ----------DELETANDO UM DADO NA TABELA -------------------------------------------------
    
    // db.run(`DELETE FROM places WHERE id = ?`, [3], function(err){
    //     if(err){
    //         return console.log(err)
    //     }

    //     console.log("Registro deletado com sucesso!")
    // })
// ---------------------------------------------------------------------------------------







})

