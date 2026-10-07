const express = require('express');
const app = express();


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
  res.render('index', { name: '이민휘', studentId: '202408037' ,email: 'alsgnl012@gmail.com' ,github: 'https://github.com/lmh0303' });
});

app.listen(3000, '0.0.0.0', () => {
  console.log('http://localhost:3000');

  
});

