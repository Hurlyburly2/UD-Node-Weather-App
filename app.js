require('dotenv').config();

const request = require('request')

const mapBoxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=' + process.env.MAPBOXACCESSTOKEN + '&limit=1'

request({ url: mapBoxUrl, json: true}, (error, response) => {
    const currentData = response.body.features[0]
    debugger
    console.log(currentData.place_name + ": latitude:" + currentData.center[1] + " longitude: " + currentData.center[0])
})

const darkSkyUrl = 'https://api.darksky.net/forecast/' + process.env.DARKSKYKEY + '/37.8267,-122.4233'

request({ url: darkSkyUrl, json: true }, (error, response) => {
    const currentData = response.body.currently
    console.log(response.body.daily.data[0].summary + " It is currently " + currentData.temperature + " degrees out. There is a " + currentData.precipProbability + "% chance of rain.")
})