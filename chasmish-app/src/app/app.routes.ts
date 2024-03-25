import { Routes } from '@angular/router';
import { AppComponent} from './app.component';
import { HomeComponent} from './home/home.component';
import { AboutComponent} from './about/about.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', component: HomeComponent} // replace with 404
] ; 
