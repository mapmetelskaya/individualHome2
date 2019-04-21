import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent {

  public navigation: INavigationItem[] = [
    { name: 'Главная', route: '/' },
    { name: 'Канада', route: '/canada', img: 'assets/canada-flag.png' },
    { name: 'Норвегия', route: '/norway', img: 'assets/canada-flag.png' },
    { name: 'Финляндия', route: '/finland', img: 'assets/canada-flag.png' },
    { name: 'Италия', route: '/italy', img: 'assets/canada-flag.png' },
    { name: 'Нидерланды', route: '/netherlands', img: 'assets/canada-flag.png' },
    { name: 'Об авторе', route: '/about' }
  ];

  images = [1, 2, 3].map(() => `https://picsum.photos/2000/300?random&t=${Math.random()}`);

  public title = 'Метельская Анна';
  public email = 'mapmetelskaya@gmail.com';
  public logo = 'assets/logo.png';
}
