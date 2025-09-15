import { Routes } from '@angular/router';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { EmpAddComponent } from './emp-add/emp-add.component';
import { EmpGetComponentComponent } from './emp-get-component/emp-get-component.component';



export const routes: Routes = [
{path: 'page1', component:SignupFormComponent},
{path: '', redirectTo: 'page2', pathMatch: 'full'},
{path: 'page2', component:LoginFormComponent},
{path: 'page3', component:EmpAddComponent},
{path: 'page4', component:EmpGetComponentComponent}

   

];
