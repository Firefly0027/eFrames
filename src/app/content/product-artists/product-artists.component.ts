import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { gsap } from 'gsap';
import { Power4 } from 'gsap/all';

@Component({
  selector: 'app-product-artists',
  templateUrl: './product-artists.component.html',
  styleUrl: './product-artists.component.scss',
})
export class ProductArtistsComponent {
  slides = [
    {
      firstName: 'London',
      lastName: 'Scout',
      imageUrl:
        'https://www.dailyartmagazine.com/wp-content/uploads/2022/08/CreationOfAdam1078-768x368.jpg',
    },
    {
      firstName: 'Vladimir',
      lastName: 'Kudinov',
      imageUrl: 'https://unsplash.it/g/1500/1000?image=1078',
    },
    {
      firstName: 'Macio',
      lastName: 'Amorim',
      imageUrl: 'https://unsplash.it/g/1500/1000?image=1077',
    },
    {
      firstName: 'Mario',
      lastName: 'Calvo',
      imageUrl: 'https://unsplash.it/g/1500/1200?image=345',
    },
  ];
}
