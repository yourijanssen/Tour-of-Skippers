import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkippersComponent } from '../components/skippers/skippers.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { SkipperDetailComponent } from '../components/skipper-detail/skipper-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'skippers', component: SkippersComponent },
  { path: 'detail/:id', component: SkipperDetailComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
