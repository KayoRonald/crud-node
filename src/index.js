const express = require('express')
const database = require('./connection/db')
const User = require('./models/User')
const app = express()

app.get('/', async (req, res) => {
  const result = await User.findAll()
  res.status(200).json(result ?   {
    message: 'Nenhum usário registrado!',
  }: result)
})

app.get('/:id', async (req, res) => {
  const result = await User.findOne()
  res.status(200).json(result)
})
app.post('/', async (req, res) => {
  const result = await User.create()
  res.send('olá')
})

app.listen(8080, () => {
  database.sync()
  console.log("Rodando na porta 8080")
})