import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared1',
  templateUrl: './shared1.component.html',
  styleUrls: ['./shared1.component.scss']
})
export class Shared1Component implements OnInit {
  loading = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit( prueba: any) {
    console.log(prueba);
  }
}
