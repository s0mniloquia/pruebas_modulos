import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared2',
  templateUrl: './shared2.component.html',
  styleUrls: ['./shared2.component.scss']
})
export class Shared2Component implements OnInit {
  loading = false;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit( prueba: any) {
    console.log(prueba);
  }
}
