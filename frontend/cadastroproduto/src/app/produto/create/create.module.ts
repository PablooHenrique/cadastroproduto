import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateRoutingModule} from './create-routing.module';
import {ProdutoCreateComponent} from './component/produto.create.component';
import {
  MatButtonModule,
  MatInputModule,
  MatSnackBarModule,
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {ProdutoService} from '../shared/produto.service';

@NgModule({
  imports: [
    CommonModule,
    CreateRoutingModule,

    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,

    FormsModule
  ],
  declarations: [
    ProdutoCreateComponent
  ],
  providers: [
    ProdutoService
  ]
})
export class CreateModule {

}
