import React, { Component } from 'react';


class WeatherWidget extends Component {
    state = {
        temp: '',
        desc: ''
    }

    getWeather = async () =>  {
        const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.props.lat}&lon=${this.props.long}&units=imperial&APPID=${process.env.REACT_APP_WEATHER_KEY}`);
        const parsedWeather = await weather.json();
        return parsedWeather;
    }

    async componentDidMount(){
        const allWeather = await this.getWeather();
        this.setState({
          temp: allWeather.main.temp,
          desc: allWeather.weather[0].main
        });
      }
    
    render(){
        return(
            <div>
                <h3>Current Weather</h3>
                <span>{this.state.temp} degrees and </span>
                <span>{this.state.desc}</span>
            </div>
        )
    }
}

export default WeatherWidget;