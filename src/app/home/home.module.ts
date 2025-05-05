import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent], // Declarar o componente Home
  imports: [CommonModule],
  exports: [HomeComponent] // Exportar o componente, se necessário
})
export class HomeModule { }
