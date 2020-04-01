import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared6',
  templateUrl: './shared6.component.html',
  styleUrls: ['./shared6.component.scss']
})
export class Shared6Component implements OnInit {
  loading = false;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit( prueba: any) {
    console.log(prueba);
  }
}
