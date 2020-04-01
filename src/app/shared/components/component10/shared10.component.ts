import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared10',
  templateUrl: './shared10.component.html',
  styleUrls: ['./shared10.component.scss']
})
export class Shared10Component implements OnInit {
  loading = false;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit( prueba: any) {
    console.log(prueba);
  }
}
