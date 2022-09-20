import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicosPrecosService } from 'src/app/services2/servicos-precos.service';

@Component({
  selector: 'app-servicos-detalhes',
  templateUrl: './servicos-detalhes.page.html',
  styleUrls: ['./servicos-detalhes.page.scss'],
})
export class ServicosDetalhesPage implements OnInit {
  public servicoSelecionado: any
  constructor(
    private route: ActivatedRoute,
    private servico: ServicosPrecosService,
    public modoEdicao1=false
  ) { }

  ngOnInit() {
    const id: number= Number(this.route.snapshot.paramMap.get("id"))
    this.servicoSelecionado=this.servico.enviarDadosId1(id)
  }

  
  
}
