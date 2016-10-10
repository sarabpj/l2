const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname +'/public'));


app.get('/', function(req,res){
  res.render('index')
})

app.get('*', (req,res) => {
  res.send('Not a proper page');
});


app.listen(process.env.PORT || 3000, () =>{
  console.log('Listing on port 3000');
});