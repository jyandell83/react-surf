import React, { Component } from 'react';


class WeatherWidget extends Component {
    state = {
        temp: '',
        desc: ''
    }

    getWeather = async () =>  {
        const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.props.lat}&lon=${this.props.long}&APPID=${process.env.REACT_APP_WEATHER_KEY}`);
        const parsedWeather = await weather.json();
        return parsedWeather;
    }

    async componentDidMount(){
        const allWeather = await this.getWeather();
        console.log(allWeather)
        this.setState({
          temp: allWeather.main.temp,
          desc: allWeather.weather[0].main
        });
      }
    
    render(){
        return(
            <div>
                <span>{this.state.temp}</span>
                <span>{this.state.desc}</span>
            </div>
        )
    }
}

export default WeatherWidget;