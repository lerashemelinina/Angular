import { Component} from '@angular/core';
import { ArticleInfo } from '../shared/models/articleInfo.model';
import { articleInfoService } from '../shared/services/articleInfoService.services';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent  {

articleList: ArticleInfo[];
click:boolean=false;

chooseArticle(article:ArticleInfo){

  console.log(`article-list component: ${article.article_type}`);
  this.myService.setChosenArticle(article);
  this.click=true;
}

  constructor(private myService:articleInfoService) {

    this.articleList=this.myService.articleFullList

   }


 

}
