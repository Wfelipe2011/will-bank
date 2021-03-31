import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from "@angular/core";
import { Transferencia } from '../models/transferencia.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTranferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: string;

  constructor(private service: TransferenciaService, private router: Router){}

  trasferir() {
    console.log('Solicitada nova trasnferencia')

    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };

    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado)
      this.limparCampos();
      this.router.navigateByUrl('extrato');
    },
    (error)=> console.error(error))


  }

  limparCampos(){
    this.valor = undefined;
    this.destino = undefined;
  }
}
