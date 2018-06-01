import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  adminName: string = "Lera Shemelinina";
  currentYear:number=(new Date()).getFullYear();

}
