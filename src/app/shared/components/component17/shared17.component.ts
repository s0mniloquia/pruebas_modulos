import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared17',
  templateUrl: './shared17.component.html',
  styleUrls: ['./shared17.component.scss']
})
export class Shared17Component implements OnInit {
  loading = false;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit( prueba: any) {
    console.log(prueba);
  }
}
