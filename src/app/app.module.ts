import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidatorPasswordTooltipModule } from './validator-password-tooltip/validator-password-tooltip.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule, // add to use FormControl
    MatInputModule, // add to use input from material
    ValidatorPasswordTooltipModule // directive created
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }