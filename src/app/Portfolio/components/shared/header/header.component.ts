import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title : string = "Portfolio";
  @Input() DAYMODE!: boolean;
  @Output() ChangeMode = new EventEmitter<boolean>();

  changeMode(){
   this.ChangeMode.emit(!this.DAYMODE);
  }
}
