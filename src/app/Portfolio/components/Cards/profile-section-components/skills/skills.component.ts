import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
 skillsData = [
  {toolTip : 'HTML' , percentage : 90 , innerStrokeColor : '#f06529', outerStrokeColor : '#e34c26' , imgSrc : '/assets/images/html.png', alt : 'html-logo'},
  {toolTip : 'CSS' , percentage : 85 , innerStrokeColor : '#2965f1', outerStrokeColor : '#264de4' , imgSrc : '/assets/images/css_with_name.png', alt : 'css-logo'},
  {toolTip : 'Java Script' , percentage : 80 , innerStrokeColor : '#323330', outerStrokeColor : '#F0DB4F' , imgSrc : '/assets/images/Js.png', alt : 'js-logo'},
  {toolTip : 'NodeJs' , percentage : 60 , innerStrokeColor : '#68a063', outerStrokeColor : '#3c873a' , imgSrc : '/assets/images/nodeJs.png', alt : 'nodeJs-logo'},
  {toolTip : 'Java(core)' , percentage : 95 , innerStrokeColor : '#f89820', outerStrokeColor : '#5382a1' , imgSrc : '/assets/images/Java.png', alt : 'java-logo'},
  {toolTip : 'BootStrap' , percentage : 75 , innerStrokeColor : '#ffffff', outerStrokeColor : '#563d7c' , imgSrc : '/assets/images/bootstrap.png', alt : 'bootstrap-logo'},
  {toolTip : 'Scss' , percentage : 85 , innerStrokeColor : '#ffffff', outerStrokeColor : '#cc6699' , imgSrc : '/assets/images/Sass.png', alt : 'sass-logo'},
  {toolTip : 'Tailwind Css' , percentage : 90 , innerStrokeColor : '#68a063', outerStrokeColor : '#3490dc' , imgSrc : '/assets/images/tailwindCss.png', alt : 'tailwind-logo'},
 ];
}
