import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

import {Produto} from '../../shared/produto.model';
import {ProdutoService} from '../../shared/produto.service';

@Component({
  selector: 'app-produto-create',
  templateUrl: 'produto.create.component.html',
  styleUrls: ['produto.create.component.scss']
})
export class ProdutoCreateComponent {

  produto: Produto = {};

  constructor(private _produtoService: ProdutoService,
              private _snackBar: MatSnackBar) {}

  save() {
    this._produtoService.save(this.produto).then(() => {
      this._snackBar.open('Produto: ' + this.produto.descricao + ' salvo com sucesso', 'salvo', {
        duration: 5000,
      });

      this.clear();
    }).catch(error => {
      console.log(error);
    });
  }

  clear() {
    this.produto = {};
  }
}
