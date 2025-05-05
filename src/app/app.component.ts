import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrigido de "styleUrl" para "styleUrls"
})
export class AppComponent {
  title = 'Gerenciador-Financas-Angular';
}
