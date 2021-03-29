import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'will-bank';
  // precisa inicializar []
  transferencias: any[] = [];//Objeto criado para receber os dados do formulario.

  transferir($event){// event
    console.log($event)
    const transferencia = {...$event, data: new Date()}
    this.transferencias.push(transferencia)

  }
}
