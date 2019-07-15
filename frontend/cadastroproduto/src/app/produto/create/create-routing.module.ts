import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProdutoCreateComponent} from './component/produto.create.component';

const routes: Routes = [
  {
    path: '',
    component: ProdutoCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRoutingModule {

}
