import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent // Declarar o componente principal
  ],
  imports: [
    BrowserModule, // Importar o módulo do navegador
    RouterModule.forRoot(routes), // Configurar as rotas
    HomeModule // Importar o módulo Home
  ],
  providers: [],
  bootstrap: [AppComponent] // Definir o componente raiz
})
export class AppModule { }