import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared18',
  templateUrl: './shared18.component.html',
  styleUrls: ['./shared18.component.scss']
})
export class Shared18Component implements OnInit {
  loading = false;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit( prueba: any) {
    console.log(prueba);
  }
}
