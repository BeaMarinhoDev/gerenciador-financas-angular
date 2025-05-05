import { Component } from '@angular/core';

@Component({
  selector: 'app-adicionar-credito',
  templateUrl: './adicionar-credito.component.html',
  styleUrls: ['./adicionar-credito.component.css']
})
export class AdicionarCreditoComponent {
  // Properties and methods for handling credit input will go here
}

// filepath: src/app/services/transaction.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private apiUrl = 'https://api.example.com/transactions';

  constructor(private http: HttpClient) {}

  getTransactions(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addTransaction(transaction: any): Observable<any> {
    return this.http.post(this.apiUrl, transaction);
  }
}