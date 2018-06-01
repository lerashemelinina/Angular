import { Component } from '@angular/core';
import { MovieInfo } from './shared/models/movies.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  selectedMovie:MovieInfo;

  public movieSelected(param:MovieInfo):void{
    this.selectedMovie=param;
  }
}
