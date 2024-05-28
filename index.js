// importar libreria
const express = require("express");

// llamar objetos

const app = express();

// ruta inicial, mostrrar mensaje

app.get("/", function(req,res){
    res.send("HOLA")

})

// crear servidor , configurar puerto usado

app.listen(3000,function(){
    console.log("EL SERVIDOR ES http://localhost:3000")
});


