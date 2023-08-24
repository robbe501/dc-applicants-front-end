import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ModuloComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'', component: HomepageComponent},
  {path:'modulo', component: ModuloComponent, loadChildren:()=>import('./signup/signup.module').then(m=>m.SignupModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
