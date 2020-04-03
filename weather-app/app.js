const request = require('request')

// const url = 'https://api.darksky.net/forecast/7b9a8e8bdf4c401998d3e9c251292727/37.8267,-122.4233'

// request({ url: url, json: true}, (error, response) => {
//     if(error) {
//         console.log('Unable to connect to weather service!')
//     } else  if(response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + '% degrees out. There is a ' + response.body.currently.precipIntensity + ' chance of rain')
//     }
// })

const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibXlrb2xhbWF0c2tvIiwiYSI6ImNrOGo1NHp2dzAydmkza25hYXpzeWpjcTQifQ.FqKElBmJEu9Ca2KaaYzKWw&limit=1'

request({url: geocodeUrl, json: true}, (error, response) => {
    if(error) {
        console.log('Uneble to connect ')
    } else if(response.body.features.length === 0) {
        console.log('Uneble to find location. Try another search')
    } else {
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(latitude, longitude) //34.0544 -118.2439
    }
})

