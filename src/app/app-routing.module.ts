import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { PrescriptionsComponent } from './prescriptions/prescriptions.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'lekarstwa',
    component: MedicinesComponent
},
{
  path: 'recepty',
  component: PrescriptionsComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'rejestracja',
  component: RegistrationComponent
},
{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
