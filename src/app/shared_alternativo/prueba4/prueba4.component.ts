import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba4',
  templateUrl: './prueba4.component.html',
  styleUrls: ['./prueba4.component.css']
})
export class Prueba4Component implements OnInit {
  loading = false;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit( prueba: any) {
    console.log(prueba);
  }
}