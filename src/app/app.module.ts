import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { ChartModule } from 'angular-highcharts';


import { HomeComponent } from "../app/home/home.component";
import { PersonalInfoComponent } from "../app/personalinfo/personalinfo.component";
import { SurveyComponent } from "../app/survey/survey.component";
import { DashboardComponent } from "../app/dashboard/dashboard.component";
import { PreferencesComponent } from "../app/preferences/preferences.component";

import { AppRoutingModule } from "./app-routing.module";

import { PersonalInfoService } from "../app/personalinfo/personalinfo.service";
import { PreferencesService } from "../app/preferences/preferences.service";
import { SurveyService } from "../app/survey/survey.service";
import { DashboardService } from "../app/dashboard/dashbaord.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonalInfoComponent,
    SurveyComponent,
    DashboardComponent,
    PreferencesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartModule
    
  ],
  providers: [
    PersonalInfoService,
    PreferencesService,
    DashboardService,
    SurveyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
