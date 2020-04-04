const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/7b9a8e8bdf4c401998d3e9c251292727/' + latitude + ',' + longitude 
    
    request({ url: url, json: true}, (error, response) => {
    if(error) {
        callback('Unable to connect to weather service!', undefined)
    } else  if(response.body.error) {
        callback('Unable to find location', undefined)
    } else {
        callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + '% degrees out. There is a ' + response.body.currently.precipIntensity + ' chance of rain')
    }
})
}

module.exports = forecast