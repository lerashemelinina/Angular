import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PeopleInfoService} from './shared/services/peopleInfoService.service'
import { AppComponent } from './app.component';
import { AllInfoComponent } from './all-info/all-info.component';

@NgModule({
  declarations: [
    AppComponent,
    AllInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PeopleInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
