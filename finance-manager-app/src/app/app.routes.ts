import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Rota padrão (Página inicial)
  { path: '**', redirectTo: '' } // Redireciona para a página inicial em caso de rota inválida
];

