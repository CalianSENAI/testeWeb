const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    const items = [
        {
            tiitle: "D",
            message: "Desenvolver Aplicativos"
        },
        {
            tiitle: "E",
            message: "Escola para Programadore"
        },
        {
            tiitle: "M",
            message: "Mais computadores"
        },
        {
            tiitle: "A",
            message: "A arte"
        },
        {
            tiitle: "I",
            message: "Incrível Reac"
        },
    ];
    res.render("pages/index", {
        qualitys:items, 
    });
})

app.get("/about", function(req, res){
    res.render("pages/about");
})

app.listen(8080);
console.log("Rodando");