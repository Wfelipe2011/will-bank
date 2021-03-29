import { Component, EventEmitter, Output } from "@angular/core";


@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTranferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: string;

  trasferir() {
    console.log('Solicitada nova trasnferencia')

    const valorEmitir = { valor: this.valor, destino: this.destino };
    this.aoTransferir.emit(valorEmitir)

    this.limparCampos();
  }

  limparCampos(){
    this.valor = undefined;
    this.destino = undefined;
  }
}
