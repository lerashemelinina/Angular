import { Component, OnInit } from '@angular/core';
import { articleInfoService } from '../shared/services/articleInfoService.services';
import { ArticleInfo } from '../shared/models/articleInfo.model';

@Component({
  selector: 'app-article-info',
  templateUrl: './article-info.component.html',
  styleUrls: ['./article-info.component.css']
})
export class ArticleInfoComponent implements OnInit {

article:any;


  constructor(private myService:articleInfoService) { 
    
    
  }

  ngOnInit(){
    this.article=this.myService.chosenArticle;
  
    console.log("ngOnInit");
  }

  }



 


