import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myPortfolio';
  MODE : boolean = true;

  changeMode(event: boolean){
    this.MODE = event;
  }
}
