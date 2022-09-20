import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'produtos-listagem',
    loadChildren: () => import('./produtos/produtos-listagem/produtos-listagem.module').then( m => m.ProdutosListagemPageModule)
  },
  {
    path: 'produtos-detalhes/:id',
    loadChildren: () => import('./produtos/produtos-detalhes/produtos-detalhes.module').then( m => m.ProdutosDetalhesPageModule)
  },
  {
    path: 'servicos-precos',
    loadChildren: () => import('./servicos/servicos-precos/servicos-precos.module').then( m => m.ServicosPrecosPageModule)
  },
  {
    path: 'servicos-detalhes/:id',
    loadChildren: () => import('./servicos/servicos-detalhes/servicos-detalhes.module').then( m => m.ServicosDetalhesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
