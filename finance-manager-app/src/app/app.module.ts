import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { GerenciarCategoriasComponent } from './gerenciar-categorias/gerenciar-categorias.component';
import { AdicionarCreditoComponent } from './adicionar-credito/adicionar-credito.component';
import { AdicionarDebitoComponent } from './adicionar-debito/adicionar-debito.component';
import { ExtratoComponent } from './extrato/extrato.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CadastroComponent,
    GerenciarCategoriasComponent,
    AdicionarCreditoComponent,
    AdicionarDebitoComponent,
    ExtratoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }