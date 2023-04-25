const { DataTypes } = require('sequelize');
const database = require('../connection/db');
const bcrypt = require('bcrypt')

const User = database.define("usuarios", {
  id: {
    type: DataTypes.INTEGER,
    autoIncremment: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  data_nascimento: {
    type: DataTypes.DATE,
    allowNull: false
  },
  escola_frequentada: {
    type: DataTypes.STRING,
    allowNull: false

  },
  ocupação_institucional: {
    type: DataTypes.STRING,
    allowNull: false
  },
  periodo_escolar: {
    type: DataTypes.STRING,
    allowNull: false
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

User.beforeSave(async (usuarios) => {
  if (usuarios.changed('password')) {
    usuarios.password = bcrypt.hashSync(usuarios.password, 10)
  }
})

module.exports = User