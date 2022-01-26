const express = require('express');
const app = express();
app.use(express.static('public'));
const routesMain = require ('./routers/main');

app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

app.use ('/', routesMain);