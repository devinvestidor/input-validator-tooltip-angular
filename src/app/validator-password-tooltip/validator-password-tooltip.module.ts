import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ValidatorPasswordTooltipDirective } from './validator-password-tooltip.directive';


@NgModule({
  declarations: [
    ValidatorPasswordTooltipDirective
  ],
  imports: [
    CommonModule,
    MatTooltipModule
  ],
  exports:[
    ValidatorPasswordTooltipDirective
  ]
})
export class ValidatorPasswordTooltipModule {}