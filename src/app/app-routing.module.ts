import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { PagesComponent } from './components/pages/pages.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'portafolio', component: PortafolioComponent },
  { path: 'pages', component: PagesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
