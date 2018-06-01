import { Pizza } from "./pizza.model";



export class PizzaInfo{

    pizzaInfoArray:Pizza[];

    diameter:number;
    slices:number;
    toppings:number;
    price:number;

    getPizzas (a:number):Pizza[]{

        this.pizzaInfoArray=new Array<Pizza>(a);

        for (let i:number=0; i<a;i++){

            this.diameter=Math.round(Math.random()*40+10);
            this.slices=Math.round(Math.random()*5+3);
            this.toppings=Math.round(Math.random()+4);
            this.price=this.diameter+this.toppings*5;

            this.pizzaInfoArray[i]={

                diameter:this.diameter,
                slices:this.slices,
                toppings:this.toppings,
                price:this.price,
            }

        }

        return this.pizzaInfoArray;
    }
    
}