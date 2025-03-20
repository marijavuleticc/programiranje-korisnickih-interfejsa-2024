import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'search', component: SearchComponent},
    {path: 'signup', component: SignupComponent},
    {path:'**', redirectTo: ''}
    
];
