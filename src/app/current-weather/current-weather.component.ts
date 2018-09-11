import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../weather/weather.service';
import { ICurrentWeather } from '../icurrent-weather';


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
    this.weatherService.getCurrentWeather('Seattle', 'us').subscribe((data) => this.current = data)
  }

}