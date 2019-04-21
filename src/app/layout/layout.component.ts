import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  images = [1, 2, 3].map(() => `https://picsum.photos/2000/300?random&t=${Math.random()}`);

  constructor() { }

  ngOnInit() {
  }

}
