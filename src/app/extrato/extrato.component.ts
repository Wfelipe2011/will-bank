import { Transferencia } from './../models/transferencia.model';
import { Component, Input, OnInit } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transferencias: any[];



  constructor(private service: TransferenciaService, translate: TranslateService){
    translate.get('EXTRACT')
  }


  ngOnInit() {
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias);
      this.transferencias = transferencias;
    })
  }

}
