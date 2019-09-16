require('dotenv').config();
const express = require('express');

const massive = require('massive');
const productCTRL = require('./controller')
const cors = require('cors')

const app = express()
app.use(express.json());
app.use(cors())

const {
    CONNECTION_STRING,
    SERVER_PORT
} = process.env

massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('database connected')
})

app.get('/api/inventory', productCTRL.getInventory)
app.post('/api/inventory', productCTRL.createProduct)
app.put('/api/inventory/:id', productCTRL.updateProduct)
app.put('/api/inventory/:id', productCTRL.deleteProduct)

app.listen(SERVER_PORT, ()=> {
    console.log('Server is running!')
})