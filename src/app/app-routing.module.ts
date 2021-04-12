import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from "src/app/components/heroes/heroes.component";
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { HeroDetailComponent } from 'src/app/components/hero-detail/hero-detail.component';

const routes: Routes = [
  { path: "heroes", component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
