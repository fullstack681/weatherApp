const request = require('request');
const constants = require('../config');

const weatherData = (address, callback)=>{
    const url = constants.openWeatherMap.BASE_URL + encodeURIComponent(address) + '&appid=' + constants.openWeatherMap.SECRET_KEY;
    // console.log(url);
    // callback(url);
    request({url, json:true}, (error, {body}) => {
        // console.log(body);
        if(error){
            callback("Can't fetch data from open weather map api ", undefined);
        }else if(!body.main || !body.name || !body.main.temp || !body.weather){
            callback("Unable to fetch data, please try again ", undefined);
        }
        else{
            callback(undefined, {
                temperature: body.main.temp,
                description: body.weather[0].description,
                cityName: body.name
            })
        }
    })
}

module.exports=weatherData;

