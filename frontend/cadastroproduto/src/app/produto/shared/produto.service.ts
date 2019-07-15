import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Produto} from './produto.model';

@Injectable()
export class ProdutoService {

  private static RESOURCE_PATH = environment.resourcePath + '';

  constructor(private httpClient: HttpClient) {}

  save(produto: Produto) {
    console.log(produto);
    return this.httpClient.post(
      ProdutoService.RESOURCE_PATH,
      JSON.stringify(produto),
      {headers: {'Content-Type': 'application/json'}}
    ).toPromise();
  }

  fetch(): Promise<Produto[]> {
    return this.httpClient.get<Produto[]>(
      ProdutoService.RESOURCE_PATH,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).toPromise();
  }

  fetchById(id: number): Promise<Produto> {
    return this.httpClient.get<Produto>(
      ProdutoService.RESOURCE_PATH + '/' + id,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).toPromise();
  }

  delete(id: number) {
    return this.httpClient.delete(
      ProdutoService.RESOURCE_PATH + '/' + id
    ).toPromise();
  }
}
