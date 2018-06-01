import { Component, OnInit } from '@angular/core';
import { PeopleInfoService } from 'src/app/shared/services/peopleInfoService.service';
import { AllPrivateInfo } from '../shared/models/all-info.model';

@Component({
  selector: 'app-all-info',
  templateUrl: './all-info.component.html',
  styleUrls: ['./all-info.component.css']
})
export class AllInfoComponent implements OnInit {

  public allInfo:any;
   
  constructor(private localInfoService:PeopleInfoService) { }

  ngOnInit() {
    this.allInfo=this.localInfoService.allInfo.allInfoArray;
  }

}
