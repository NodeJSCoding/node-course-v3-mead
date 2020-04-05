const path = require('path')
const express = require('express')

console.log(__dirname)

const app = express()

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates')

//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewPath)  

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Mykola Matsko'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Mykola Matsko'
    })
})


app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Can help you',
        name: 'Mykola Matsko'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
})

app.listen(3000, () => {
    console.log('Server is up port 3000')
})