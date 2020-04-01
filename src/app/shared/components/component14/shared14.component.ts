import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared14',
  templateUrl: './shared14.component.html',
  styleUrls: ['./shared14.component.scss']
})
export class Shared14Component implements OnInit {
  loading = false;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit( prueba: any) {
    console.log(prueba);
  }
}
