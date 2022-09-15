import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import { Usuario, UsuarioHeader } from './usuario';
import { BehaviorSubject } from 'rxjs';

const USER = 'userName';
const USER_ID = 'userId';




@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarioSubject = new BehaviorSubject<UsuarioHeader | null>(null)
  // user: UsuarioHeader;

  constructor(private tokenService: TokenService) {
    if (this.tokenService.possuiToken()) {
      this.decodificaJWT();
    }
   }

  private decodificaJWT() {
    let usuarioHeader: UsuarioHeader = {
      email: this.getUserName()
    }
    const token = this.tokenService.retornaToken();
    this.usuarioSubject?.next(usuarioHeader);

  }

  retornaUsuario() {
    return this.usuarioSubject?.asObservable();
  }

  salvaToken(token: string) {
    this.tokenService.salvaToken(token);
    this.decodificaJWT();
  }

  logout() {
    this.tokenService.excluiToken();
    this.removeUserName();

    this.usuarioSubject.next(null)
  }

  estaLogado() {
    return this.tokenService.possuiToken();
  }

  setUserName(userName: string) {
    window.localStorage.setItem(USER, userName);
  }


  setUserId(id: string) {
    window.localStorage.setItem(USER_ID, id);
  }

  getUserName() {
    return window.localStorage.getItem(USER);
  }

  removeUserName() {
    window.localStorage.removeItem(USER);
  }
}
