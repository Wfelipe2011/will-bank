import { Component } from '@angular/core';
import { TransferenciaService } from './services/transferencia.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'will-bank';

  constructor(private service: TransferenciaService){}


}
