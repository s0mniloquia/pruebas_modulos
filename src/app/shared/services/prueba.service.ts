import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  public numero: number;

  constructor() {
    this.numero = Math.random();
  }
}
