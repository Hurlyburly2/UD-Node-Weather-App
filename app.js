require('dotenv').config();

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('110 Tudor St, Boston Ma', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

forecast(42.336447, -71.053171, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})