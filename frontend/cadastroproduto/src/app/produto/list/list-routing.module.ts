import {RouterModule, Routes} from '@angular/router';
import {ProdutoListComponent} from './component/produto-list.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ProdutoListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule {

}
