import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared13',
  templateUrl: './shared13.component.html',
  styleUrls: ['./shared13.component.scss']
})
export class Shared13Component implements OnInit {
  loading = false;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit( prueba: any) {
    console.log(prueba);
  }
}
