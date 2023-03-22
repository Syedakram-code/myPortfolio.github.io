import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MaterialModule } from '../Core/Material.module';
import { OverviewCardComponent } from './components/Cards/overview-card/overview-card.component';
import { ProfileSectionsComponent } from './components/Cards/profile-sections/profile-sections.component';
import { SkillsComponent } from './components/Cards/profile-section-components/skills/skills.component';
import { AcadimicsComponent } from './components/Cards/profile-section-components/acadimics/acadimics.component';
import { ProjectsComponent } from './components/Cards/profile-section-components/projects/projects.component';
import { BlogsComponent } from './components/Cards/profile-section-components/blogs/blogs.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [HeaderComponent , FooterComponent , ProfileComponent, OverviewCardComponent, ProfileSectionsComponent, SkillsComponent, AcadimicsComponent, ProjectsComponent, BlogsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      showSubtitle: false,
    })
  ],
  exports:[
    HeaderComponent , FooterComponent , ProfileComponent ,MaterialModule,OverviewCardComponent,ProfileSectionsComponent
  ]
})
export class PortfolioModule { }