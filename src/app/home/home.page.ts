import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public form = [
    { val: 'Permanecer conectado', isChecked: true }
  ];

  public mensagem;
  public email;
  public senha;

  constructor() {}

  public logar(){
    if(this.email && this.senha == null) {
    this.mensagem = "O login não foi efetuado!";
     }
    else {
    this.mensagem = "O login foi efetuado!";
    }}
    
    public apagar(){
      this.email = null;
      this.senha = null;
      this.mensagem = null;
    }

}

  

  