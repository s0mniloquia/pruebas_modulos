import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared9',
  templateUrl: './shared9.component.html',
  styleUrls: ['./shared9.component.scss']
})
export class Shared9Component implements OnInit {
  loading = false;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit( prueba: any) {
    console.log(prueba);
  }
}
