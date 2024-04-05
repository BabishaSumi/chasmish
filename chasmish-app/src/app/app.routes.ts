import { Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { AboutComponent} from './about/about.component';
import { FAQComponent } from './faq/faq.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'faq', component: FAQComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', component: HomeComponent} // replace with 404
] ; 
