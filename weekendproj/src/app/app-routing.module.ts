import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OpenBetFormComponent } from './open-bet-form/open-bet-form.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {path: 'open-bet-form', component: OpenBetFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
