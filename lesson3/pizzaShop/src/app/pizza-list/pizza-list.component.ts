import { Component, OnInit } from '@angular/core';
import { Pizza } from '../shared/classes&&models/pizza.model';
import { PizzaInfo } from '../shared/classes&&models/pizzaInfo';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {

 pizzaInfoList:PizzaInfo;

 localPizzaArray:Pizza[];


  constructor() { 

  this.pizzaInfoList=new PizzaInfo();

  }

  ngOnInit() {

    this.localPizzaArray=this.pizzaInfoList.getPizzas(Math.round(Math.random()*50+10));
  }

}
