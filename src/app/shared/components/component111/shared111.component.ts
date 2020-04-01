import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared111',
  templateUrl: './shared111.component.html',
  styleUrls: ['./shared111.component.scss']
})
export class Shared111Component implements OnInit {
  loading = false;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit( prueba: any) {
    console.log(prueba);
  }
}
