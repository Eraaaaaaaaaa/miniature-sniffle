// var express = require('express');
// var app = express();
// app.get("/user/:id",(req, res) =>{
//     var users =[
//         {id:1, name:"Filan"},
//         {id:2, name:'Fisteku'}
//     ]
//     const user = users.find(item =>{
//         return item.id==req.params.id
//     })
//     res.send(`Pershendetje ${user.name}`);
// })

// // app.get("/home", function(req, res) {
// //     res.send('text response');
// // })



var express = require('express');
var app = express();
app.get("/librat/:id",(req, res) =>{
    var librat =[
        {id:1, name:"Jane Eyr blah blah"},
        {id:2, name:'Keshtjella Kadare'}
    ]
    const libra = librat.find(item =>{
        return item.id==req.params.id
    })
    res.send(`Ky eshte libri qe kerkuat: ${libra.name}`);
})

app.get("/produkt/:id",(req, res) =>{
    var produktet =[
        {id:1, name:"tilifon"},
        {id:2, name:'kompjuter'}
    ]
    const produkte = produktet.find(item =>{
        return item.id==req.params.id
    })
    res.send(`Ky eshte produkti qe kerkuat: ${produkte.name}`);
})

app.listen('1168');