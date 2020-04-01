import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared15',
  templateUrl: './shared15.component.html',
  styleUrls: ['./shared15.component.scss']
})
export class Shared15Component implements OnInit {
  loading = false;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit( prueba: any) {
    console.log(prueba);
  }
}
