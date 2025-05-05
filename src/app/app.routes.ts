import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdicionarCreditoComponent } from './adicionar-credito/adicionar-credito.component';
import { AdicionarDebitoComponent } from './adicionar-debito/adicionar-debito.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Página inicial
  { path: 'adicionar-credito', component: AdicionarCreditoComponent },
  { path: 'adicionar-debito', component: AdicionarDebitoComponent },
  { path: '**', redirectTo: '' } // Redirecionar para a página inicial em caso de rota inválida
];
