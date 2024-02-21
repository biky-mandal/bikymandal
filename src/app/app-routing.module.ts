import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './screens/welcome/welcome.component';
import { HomeComponent } from './screens/home/home.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
