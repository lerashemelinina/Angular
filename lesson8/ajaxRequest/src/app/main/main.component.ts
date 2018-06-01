import { Component, OnInit} from '@angular/core';
import { InfoService } from '../shared/services/info-service.service';
// import { PersonInfo } from '../shared/models/person-info.models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  public localPersonInfo:any;

  constructor(private myInfoSevice:InfoService) {
 
   }

   ngOnInit() {
    this.localPersonInfo = this.myInfoSevice;
   
}



}
