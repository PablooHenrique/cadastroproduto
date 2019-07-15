import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'produto/new',
    loadChildren: './produto/create/create.module#CreateModule'
  },
  {
    path: 'produto/list',
    loadChildren: './produto/list/list.module#ListModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
