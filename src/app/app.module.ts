import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Importe os componentes principais
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { GerenciarCategoriasComponent } from './gerenciar-categorias/gerenciar-categorias.component';
import { AdicionarCreditoComponent } from './adicionar-credito/adicionar-credito.component';
import { AdicionarDebitoComponent } from './adicionar-debito/adicionar-debito.component';
import { ExtratoComponent } from './extrato/extrato.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    HomeComponent,
    GerenciarCategoriasComponent,
    AdicionarCreditoComponent,
    AdicionarDebitoComponent,
    ExtratoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
