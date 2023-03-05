import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  MyName:string = "Syed Akram Mehdi";
  @Input() dayMode!: boolean;
 socialMediaLinks = [
  {toolTip : 'LinkedIn' , src : './assets/images/linkedin.png' , link:'https://www.linkedin.com/in/syed-akram-mehdi-7b42b4183'},
  {toolTip : 'GitHub' , src : './assets/images/github-sign.png',link:'https://github.com/Syedakram-code'},
  {toolTip : 'Instagram' , src : './assets/images/instagram.png',link:'https://www.instagram.com/_____syed_____akram_____/'},
  {toolTip : 'WhatsApp' , src : './assets/images/whatsapp.png',link:'https://wamsg.me/l6zl'},
 ]
}
