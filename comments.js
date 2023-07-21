//create a webs server
//create a route for the home page
//create a route for the contact page
//create a route for the about page
//create a route for the bad page
//start the server and test your work

const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/comments', (req, res) => {
    res.render('comments')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/bad', (req, res) => {
    res.render('bad')
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
