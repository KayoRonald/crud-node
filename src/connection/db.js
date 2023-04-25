const Sequelize = require('sequelize')

const database = new Sequelize('teste', 'root', 'password', {
  host: "0.0.0.0",
  dialect: "mysql",
})

database.authenticate().then(function () {
  console.log("conectado com sucesso")
}).catch(function (erro) {
  console.log("falha ao conectar:" + erro)
})

module.exports = database