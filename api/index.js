const app = require('./src/app')
const port = 3003

app.listen(port, () => {
    console.log(`Api iniciada com sucesso na porta ${port}`)
})