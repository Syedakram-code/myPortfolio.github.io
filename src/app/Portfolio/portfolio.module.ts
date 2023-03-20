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

@NgModule({
  declarations: [HeaderComponent , FooterComponent , ProfileComponent, OverviewCardComponent, ProfileSectionsComponent, SkillsComponent, AcadimicsComponent, ProjectsComponent, BlogsComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports:[
    HeaderComponent , FooterComponent , ProfileComponent ,MaterialModule,OverviewCardComponent,ProfileSectionsComponent
  ]
})
export class PortfolioModule { }