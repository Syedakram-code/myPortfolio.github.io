import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MaterialModule } from '../Core/Material.module';
import { OverviewCardComponent } from './components/Cards/overview-card/overview-card.component';

@NgModule({
  declarations: [HeaderComponent , FooterComponent , ProfileComponent, OverviewCardComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports:[
    HeaderComponent , FooterComponent , ProfileComponent ,MaterialModule,OverviewCardComponent
  ]
})
export class PortfolioModule { }