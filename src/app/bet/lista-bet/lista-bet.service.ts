import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { ApostasElement, UsuarioElement } from '../bet';

@Injectable({
  providedIn: 'root',
})
export class ListaBetService {
  constructor(private HttpClient: HttpClient) {}

  getUsuario() {
    return this.HttpClient.get<UsuarioElement[]>(
      'http://localhost:8080/usuario'
    ).pipe(tap((res) => console.log(res)));
  }

  getBetByUsarioId(id: number) {
    return this.HttpClient.get<ApostasElement[]>(
      `http://localhost:8080/bet/${id}`
    ).pipe(tap((res) => console.log(res)));
  }

  get() {
    return this.HttpClient.get<ApostasElement[]>(
      'http://localhost:8080/bet'
    ).pipe(tap((res) => console.log(res)));
  }

  post(data: ApostasElement) {
    return this.HttpClient.post('http://localhost:8080/bet', data).pipe(
      tap((res) => console.log(res))
    );
  }
}
