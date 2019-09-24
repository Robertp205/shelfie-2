require('dotenv').config();
const express = require('express');

const massive = require('massive');
const cors = require('cors')
const {
    CONNECTION_STRING,
    SERVER_PORT
} = process.env

const productCTRL = require('./controller')
const app = express()
app.use(express.json());
app.use(cors())



app.get('/api/inventory', productCTRL.getInventory)
app.post('/api/inventory', productCTRL.createProduct)
app.put('/api/inventory/:id', productCTRL.updateProduct)
app.delete('/api/inventory/:id', productCTRL.deleteProduct)

massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('database connected')
})
app.listen(SERVER_PORT, ()=> {
    console.log(`Old Macdonald had ${SERVER_PORT} farms`)
})