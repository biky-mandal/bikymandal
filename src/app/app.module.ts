import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './screens/welcome/welcome.component';
import { HomeComponent } from './screens/home/home.component';
import { OtherExpCardComponent } from './components/other-exp-card/other-exp-card.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { EducationCardComponent } from './components/education-card/education-card.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    OtherExpCardComponent,
    ProjectCardComponent,
    EducationCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
