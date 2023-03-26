import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { NavdetailsComponent } from './templates/navdetails.component';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [{
  path: '',
  component: AppComponent,
  children: [
    { path: 'home', component: HomeComponent },
    { path: 'details', component: DetailsComponent },
    { path: 'template', component: TemplateComponent },
    { path: 'navdetails', component: NavdetailsComponent },

    { path: '**', redirectTo: 'home' },
  ],
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
