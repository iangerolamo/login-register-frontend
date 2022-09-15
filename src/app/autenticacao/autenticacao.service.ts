import { TokenService } from './token.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { UsuarioService } from './usuario/usuario.service';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(
    private httpClient: HttpClient,
    private usuarioService: UsuarioService
  ) {}

  autenticar(usuario: string, senha: string): Observable<HttpResponse<any>> {
    return this.httpClient
      .post(
        'http://localhost:8080/login',
        {
          email: usuario,
          senha: senha,
        },

        { observe: 'response' }
      )
      .pipe(
        tap((res) => {
          const authToken = res.headers.get('Authorization') ?? '';
          if (authToken)
            this.usuarioService.setUserName(usuario);
          console.log(authToken);
          this.usuarioService.salvaToken(authToken);


        })
      );
  }
}
