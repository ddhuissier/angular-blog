import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home.component').then(mod => mod.HomeComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./components/not-found/not-found.component').then(mod => mod.NotFoundComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
