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
  },
  {
    path: 'produto/edit/:id',
    loadChildren: './produto/edit/edit.module#EditModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
