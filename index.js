const express = require('express');
const app = express();
const port = process.env.PORT || 12000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res, next)=>
{
    res.render('index');
});

app.listen(port, ()=> console.log(`UUG Web Test NodeJS listening on Port ${port}`));