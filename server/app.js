const express = require('express')
const app = express()

app.get('/', function (req, res) {
  redirect('/login');
})
app.get('/login', function (req, res) {
 res.send('123');
})
app.listen(3000, function () {
  console.log('Contacts Web app service listening on port 3000!')
})
