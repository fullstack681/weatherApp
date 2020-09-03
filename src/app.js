const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

const publicStaticDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');
const weatherData = require('../utils/weatherData');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicStaticDirPath));

app.get('', (req, res)=>{
    res.render("index", {
        title: "Weather App"
    });
})

//localhost:3000/weather?address=mumbai
app.get('/weather', (req, res)=>{
    // res.send("This is a weather end point...");
    const address = req.query.address

    if(!address)
    {
        return res.send({
            error : "Please enter address..."
        })
    }

    weatherData(address, (error,  {temperature, description, cityName}={})=>{
        
        if(error)
        {
            return res.send({
                error
            })
        }
        // res.send("url: "+result);
        console.log(temperature, description, cityName);
        res.send({
            temperature, 
            description, 
            cityName
        })
    });
})

app.get('*', (req, res)=>{
    res.render("404", {
        title: "Page not found"
    });
})

app.listen(port, ()=>{
    console.log('Server is up and running on port: ', port);
})