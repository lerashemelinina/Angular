import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { ArticleInfoComponent } from './article-info/article-info.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { articleInfoService } from './shared/services/articleInfoService.services';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  
    ArticleInfoComponent,
    ArticleListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [articleInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
