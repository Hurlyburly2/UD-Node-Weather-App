require('dotenv').config();

const request = require('request')

const url = 'https://api.darksky.net/forecast/' + process.env.DARKSKYKEY + '/37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
    const currentData = response.body.currently
    console.log(response.body.daily.data[0].summary + " It is currently " + currentData.temperature + " degrees out. There is a " + currentData.precipProbability + "% chance of rain.")
})