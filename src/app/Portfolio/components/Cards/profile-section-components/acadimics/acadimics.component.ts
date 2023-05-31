import { Component } from '@angular/core';

@Component({
  selector: 'app-acadimics',
  templateUrl: './acadimics.component.html',
  styleUrls: ['./acadimics.component.scss']
})
export class AcadimicsComponent {
  acadamics=[
  {courseType:'SSC',institute:"St Andrew's Grammer High School",passOutYear:'2016-2017',grade:'8.0',color:'#C6FC99'},
  {courseType:'INTERMEDIATE',institute:"Sri Chaitanya Junior College",passOutYear:'2017-2019',grade:'7.25',color:'#7DE6BB'},
  {courseType:"BACHELOR'S OF TECHNOLOGY",institute:"Netaji Institute of Engineering and Technology",passOutYear:'2019-2023',grade:'7.0',color:'#D76CFF'},
]
}
