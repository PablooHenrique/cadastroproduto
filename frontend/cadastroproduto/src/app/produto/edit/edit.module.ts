import {NgModule} from '@angular/core';
import {MatButtonModule, MatInputModule, MatSnackBarModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {EditRoutingModule} from './edit.routing.module';
import {ProdutoEditComponent} from './component/produto-edit.component';
import {ProdutoService} from '../shared/produto.service';

@NgModule({
  imports: [
    CommonModule,
    EditRoutingModule,

    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,

    FormsModule
  ],
  declarations: [
    ProdutoEditComponent
  ],
  providers: [
    ProdutoService
  ]
})
export class EditModule {

}
