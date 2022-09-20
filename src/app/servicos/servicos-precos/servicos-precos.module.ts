import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicosPrecosPageRoutingModule } from './servicos-precos-routing.module';

import { ServicosPrecosPage } from './servicos-precos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicosPrecosPageRoutingModule
  ],
  declarations: [ServicosPrecosPage]
})
export class ServicosPrecosPageModule {}
