const express = require('express');
const app = express();

app.set('port', 12002);
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res)=>
{
    res.render('index');
});

app.listen(app.get('port'), ()=> console.log("UUG Web Test NodeJS listening on Port: ",app.get('port')));