import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicosPrecosPage } from './servicos-precos.page';

const routes: Routes = [
  {
    path: '',
    component: ServicosPrecosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicosPrecosPageRoutingModule {}
