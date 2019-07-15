import {NgModule} from '@angular/core';
import {MatButtonModule, MatSnackBarModule, MatTableModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ProdutoListComponent} from './component/produto-list.component';
import {ListRoutingModule} from './list-routing.module';
import {ProdutoService} from '../shared/produto.service';

@NgModule({
  imports: [
    CommonModule,
    ListRoutingModule,

    MatTableModule,
    MatButtonModule,
    MatSnackBarModule,

    FormsModule

  ],
  declarations: [
    ProdutoListComponent
  ],
  providers: [
    ProdutoService
  ]
})
export class ListModule {

}
