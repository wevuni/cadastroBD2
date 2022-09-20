import { Component, OnInit } from '@angular/core';
import { ServicosPrecosService } from 'src/app/services2/servicos-precos.service';

@Component({
  selector: 'app-servicos-precos',
  templateUrl: './servicos-precos.page.html',
  styleUrls: ['./servicos-precos.page.scss'],
})
export class ServicosPrecosPage implements OnInit {
  public todosDados: any

  constructor(private dados: ServicosPrecosService)
  {

    this.todosDados=this.dados.enviarTodosDados()
    }

  ngOnInit() {
  }

}
