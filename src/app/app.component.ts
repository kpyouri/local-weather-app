
import { ICurrentWeather } from './icurrent-weather';
import { WeatherService } from './weather/weather.service';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentWeather: ICurrentWeather
  title = 'Today\'s Forecast';

  constructor(private weatherService: WeatherService) {}

  doSearch(searchValue){
    const userInput = searchValue.split(',').map(s => s.trim ());
  console.log(this.weatherService)
  this.weatherService
  .getCurrentWeather(userInput[0], userInput.length > 1 ? userInput[1] : undefined)
.subscribe(data => this.currentWeather = data)  
}

}
