import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "../app/home/home.component";
import { PersonalInfoComponent } from "../app/personalinfo/personalinfo.component";
import { SurveyComponent } from "../app/survey/survey.component";
import { DashboardComponent } from "../app/dashboard/dashboard.component";
import { PreferencesComponent } from "../app/preferences/preferences.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "personalInfo", component: PersonalInfoComponent },
  { path: "preferences", component: PreferencesComponent },
  { path: "survey", component: SurveyComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
