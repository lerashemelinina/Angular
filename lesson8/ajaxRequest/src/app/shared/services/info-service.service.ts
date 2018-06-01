import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import { RootObject } from '../models/root-object.model';


@Injectable()
export class InfoService {
public personInfo: any={};

// RootObject={
//     // page:undefined,
//     // per_page:undefined,
//     // total:undefined,
//     // total_pages:undefined,
//     // data:undefined
// }

constructor (private myHttpClient: HttpClient){
    this.myHttpClient.get("https://reqres.in/api/users").subscribe((x)=>{this.personInfo=x;});
    console.log("hello");
    
}

}