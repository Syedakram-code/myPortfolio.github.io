import { Component } from '@angular/core';

@Component({
  selector: 'app-overview-card',
  templateUrl: './overview-card.component.html',
  styleUrls: ['./overview-card.component.scss']
})
export class OverviewCardComponent {
  overviewCardData=[
    {link : '#skills' , imgSrc : './assets/images/skillls.png' , alt : 'skillsPng' , name : 'Skills'},
    {link : '#acadimics' , imgSrc : './assets/images/acadimics.png' , alt : 'acadimicsPng' , name : 'Acadimics'},
    {link : '#projects' , imgSrc : './assets/images/projects.png' , alt : 'projectsPng' , name : 'Projects'},
  ]
}
