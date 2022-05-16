const express = require('express')
const app = express()
const port = 3003

app.get('/', (req, res) => {
    res.send('Olá Mundo!')
})

app.listen(port, () => {
    console.log(`Api iniciada com sucesso na porta ${port}`)
})