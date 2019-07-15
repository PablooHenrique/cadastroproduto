import {Component, OnInit} from '@angular/core';
import {ProdutoService} from '../../shared/produto.service';
import {Produto} from '../../shared/produto.model';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-produto-list',
  templateUrl: 'produto-list.component.html',
  styleUrls: ['produto-list.component.scss']
})
export class ProdutoListComponent implements OnInit {

  produtos: Produto[] = [];
  displayedColumns: string[] = ['id', 'descricao', 'preco', 'actions'];

  constructor(private _produtoService: ProdutoService,
              private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.fetch();
  }

  fetch() {
    this._produtoService.fetch().then(response => {
      this.produtos = response;
    });
  }

  remove(produto: Produto) {
    this._produtoService.delete(produto.id).then(() => {
      this._snackBar.open('Produto removido com sucesso.', 'salvo', {
        duration: 5000,
      });
      this.fetch();
    }).catch(error => {
      console.log(error);
    });
  }
}
