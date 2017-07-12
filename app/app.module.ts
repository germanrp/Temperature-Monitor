import { BrowserModule } from '@angular/platform-browser';
import { Bootstrap } from "@angular/platform-browser"
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component.ts';
import { AddTemperatureComponent } from './addTemperature/addTemperature.component.ts';
import { CalculateMedianComponent } from './calculateMedian/calculateMedian.component.ts';
import { TemperatureMonitor } from './addTemperature/addTemperature.service.ts';

@NgModule({

  declarations: [
    AppComponent,
    AddTemperatureComponent,
    CalculateMedianComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  
  providers: [
    TemperatureMonitor 
  ],
  
  bootstrap: [
  	AppComponent,
  	AddTemperatureComponent,
  	CalculateMedianComponent
  ]
})

export class AppModule { }
