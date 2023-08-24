import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RiepilogoTestComponent } from './riepilogo-test/riepilogo-test.component';
import { SvolgimentoTestComponent } from './svolgimento-test/svolgimento-test.component';
import { TestHomeComponent } from './test-home/test-home.component';

const routes: Routes = [
  {path:'', component: TestHomeComponent},
  {path:'test-home', component: TestHomeComponent},
  {path:'svolgimento-test', component: SvolgimentoTestComponent},
  {path:'riepilogo-test', component: RiepilogoTestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
