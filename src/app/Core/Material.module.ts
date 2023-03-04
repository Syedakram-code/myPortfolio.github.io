// ICON MODULE
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  imports: [
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
  ],
})
export class MaterialModule {}
