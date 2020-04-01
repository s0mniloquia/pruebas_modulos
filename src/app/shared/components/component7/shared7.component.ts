import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared7',
  templateUrl: './shared7.component.html',
  styleUrls: ['./shared7.component.scss']
})
export class Shared7Component implements OnInit {
  loading = false;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit( prueba: any) {
    console.log(prueba);
  }
}
