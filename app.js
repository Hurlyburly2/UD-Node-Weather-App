require('dotenv').config();

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2]

if (!location) {
    console.log("Please provide an address or location")
} else {
    geocode(location, (error, locationData) => {
        if (error) {
            return console.log(error)
        }
        forecast(locationData.latitude, locationData.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            
            console.log(locationData.location)
            console.log(forecastData)
        })
    })
}


