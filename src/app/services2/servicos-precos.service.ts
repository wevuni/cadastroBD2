import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicosPrecosService {

  private servicos = [
    {id: 1, nome:'alinhamento', valor:49.00},
    {id: 2, nome:'balanceamento', valor:39.00},
    {id: 3, nome:'revisão de freios', valor:129.00},
    {id: 4, nome:'revisão de suspensão', valor:199.00}
  ]
  constructor() { }
  enviarTodosDados(){
    return this.servicos
  }
  enviarDadosId1(id:number){
    const produtoSelecionado= this.servicos.filter(produto=> produto.id === id)
    return produtoSelecionado[0]
}
}

