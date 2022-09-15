import { Router } from '@angular/router';
import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';

  constructor(private authService: AutenticacaoService, private router: Router) {}

  ngOnInit() {}

  login() {
    this.authService.autenticar(this.usuario, this.senha).subscribe(
      () => {
        this.router.navigate(['bet'])
        console.log('login realizado com sucesso');
      },
      (error) => {
        alert('Usuário ou senha inválido');
        this.usuario = '';
        this.senha = '';
        console.log(error);
      }
    );
  }
}
