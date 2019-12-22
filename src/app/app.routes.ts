import { MainComponent } from './main/main.component';
import { AuthComponent } from './auth/auth.component';
import { Routes, RouterModule} from "@angular/router";
import { HomeComponent } from "./components/home/home.component";


const APP_ROUTES: Routes = [
	{path: '', pathMatch: 'full', redirectTo: 'auth'}, 
	{path: 'auth', component: AuthComponent}, 
	{path: 'main', component: MainComponent}, 
	{path: 'home', component: HomeComponent}, 

	{ path: '**', pathMatch: 'full', redirectTo: 'home'} 
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);