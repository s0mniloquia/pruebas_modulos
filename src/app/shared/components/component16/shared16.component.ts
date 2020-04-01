import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared16',
  templateUrl: './shared16.component.html',
  styleUrls: ['./shared16.component.scss']
})
export class Shared16Component implements OnInit {
  loading = false;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit( prueba: any) {
    console.log(prueba);
  }
}
