import { Component, OnInit } from '@angular/core';
import { PruebaService } from '../../shared/services/prueba.service';

@Component({
  selector: 'app-prueba-component-core',
  templateUrl: './prueba-component-core.component.html',
  styleUrls: ['./prueba-component-core.component.scss']
})
export class PruebaComponentCoreComponent implements OnInit {

  constructor(private pruebaService: PruebaService) { }

  ngOnInit(): void {
    console.log(`Soy el componente del core y el numero es ${this.pruebaService.numero}`);
  }

}
