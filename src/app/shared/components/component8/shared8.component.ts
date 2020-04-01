import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared8',
  templateUrl: './shared8.component.html',
  styleUrls: ['./shared8.component.scss']
})
export class Shared8Component implements OnInit {
  loading = false;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit( prueba: any) {
    console.log(prueba);
  }
}
