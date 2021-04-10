const { response } = require("express")
const express = require("express")
const server = express()
const routes = require("./routes")




server.listen(3000,()=> console.log('Rodando'))

//Habilita os arquivos statics
server.use(express.static("public"))
//Use não server para criar rotas sempre, apenas para configurar.
server.use(routes)