import { Component, Input } from '@angular/core';
import { MovieInfo } from '../shared/models/movies.model';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {

  @Input() movieSelected: MovieInfo;

}
