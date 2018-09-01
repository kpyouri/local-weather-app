import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../icurrent-weather';
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather;

  constructor(private weatherService: WeatherService) { 
    
  }

  ngOnInit() {
    this.current = {
      city: '',
      country: '',
      date: undefined,
      image: '',
      temperature: 0,
      description: ''
    };

    this.weatherService.getCurrentWeather('Seattle', 'us').subscribe((data) => {
      this.current = {
        city: data.name,
        country: data.sys.country,
        date: new Date(data.dt * 1000),
        image: data.weather[0].icon,
        temperature: (data.main.temp * 9 / 5) - 459.67,
        description: data.weather[0].description,
      }
    })
  }

}
