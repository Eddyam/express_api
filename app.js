// Usando objetos express
const express = require('express')
// App de express
const app = express()
app.use(express.json()) // Indicamos que usaremos json
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// Inicializar app 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})