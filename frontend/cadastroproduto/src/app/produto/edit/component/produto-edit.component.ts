import {Component} from '@angular/core';
import {Produto} from '../../shared/produto.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ProdutoService} from '../../shared/produto.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-produto.edit',
  templateUrl: 'produto-edit.component.html',
  styleUrls: ['produto-edit.component.scss']
})
export class ProdutoEditComponent {

  produto: Produto = {};

  constructor(private _produtoService: ProdutoService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router,
              private _snackBar: MatSnackBar) {

    this._activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if (id > 0) {
        this.fetchById(id);
      }
    });

  }

  save() {
    this._produtoService.save(this.produto).then(() => {
      this._snackBar.open('Produto: ' + this.produto.descricao + ' atualizado com sucesso', 'Ok', {
        duration: 5000,
      });

      this._router.navigate(['produto/list']);
    });
  }

  cancel() {
    this._router.navigate(['produto/list']);
  }

  fetchById(id: number) {
    this._produtoService.fetchById(id).then(response => {
      this.produto = response;
      console.log(response);
    });
  }
}
