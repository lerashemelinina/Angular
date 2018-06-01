import { Component, Output, EventEmitter } from '@angular/core';
import { MovieInfo } from '../shared/models/movies.model';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})

export class Child1Component  {
 
    movieArray: MovieInfo[];

    msg = {
        title: 'Movie List',
        
    };
    
    constructor() {

        this.movieArray = [

          {
          id: 1,
  movie_name: "Coraline",
  price: 7.13,
  movie_date: "7/9/2017"
}, {
  id: 2,
  movie_name: "Finding Dory",
  price: 10.09,
  movie_date: "12/12/2016"
}, {
  id: 3,
  movie_name: "The Wailing",
  price: 10.69,
  movie_date: "3/9/2017"
}, {
  id: 4,
  movie_name: "The Void",
  price: 8.85,
  movie_date: "10/30/2017"
}, {
  id: 5,
  movie_name: "Tower",
  price: 8.47,
  movie_date: "4/6/2017"
}
        ];

}

    @Output() movieEmitter: EventEmitter<MovieInfo>=new EventEmitter<MovieInfo>();

    public movieSelected(param:MovieInfo): void {

      console.log(param);

        this.movieEmitter.emit(param);
    }
}
  
