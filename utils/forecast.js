const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = 'https://api.darksky.net/forecast/' + process.env.DARKSKYKEY + '/' + latitude + ',' + longitude

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather service', undefined)
    } else if (response.body.error) {
      console.log("Unable to retrieve weather information", undefined)
    } else {
      const forecast = response.body.daily.data[0].summary + " It is currently " + response.body.currently.temperature + " degrees out. There is a " + response.body.currently.precipProbability + "% chance of rain"
      callback(undefined, forecast)
    }
  })
}

module.exports = forecast