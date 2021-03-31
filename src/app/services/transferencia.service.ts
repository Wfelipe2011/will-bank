import { Transferencia } from './../models/transferencia.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencia'

constructor(private httpClient: HttpClient) {
  this.listaTransferencia = [];
 }

 get transferencias() {
   return this.listaTransferencia
 }

 todas(): Observable<Transferencia[]>{
   return this.httpClient.get<Transferencia[]>(this.url);
 }

 adicionar(transferencia: Transferencia): Observable<Transferencia>{
   console.log(transferencia)
   this.tratar(transferencia)

   return this.httpClient.post<Transferencia>(this.url, transferencia)
 }

 private tratar(transferencia: Transferencia){
   //colocar logica
   transferencia.data = new Date();
 }
}
