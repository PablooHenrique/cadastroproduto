import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProdutoEditComponent} from './component/produto-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ProdutoEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditRoutingModule {

}
