import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared12',
  templateUrl: './shared12.component.html',
  styleUrls: ['./shared12.component.scss']
})
export class Shared12Component implements OnInit {
  loading = false;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit( prueba: any) {
    console.log(prueba);
  }
}
