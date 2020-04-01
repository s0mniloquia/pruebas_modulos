import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared11111',
  templateUrl: './shared11111.component.html',
  styleUrls: ['./shared11111.component.scss']
})
export class Shared11111Component implements OnInit {
  loading = false;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit( prueba: any) {
    console.log(prueba);
  }
}
