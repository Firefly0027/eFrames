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
import { Filter } from '../../interfaces/filter';

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
      imageUrl: 'assets/forest-7580700_1280.jpg',
    },
    {
      firstName: 'Vladimir',
      lastName: 'Kudinov',
      imageUrl: 'assets/versailles-9057981_1280.jpg',
    },
    {
      firstName: 'Macio',
      lastName: 'Amorim',
      imageUrl: 'assets/forest-7580700_1280.jpg',
    },
    {
      firstName: 'Mario',
      lastName: 'Calvo',
      imageUrl: 'assets/versailles-9057981_1280.jpg',
    },
  ];

  filters: Filter[] = [
    {
      name: 'Artists',
      key: 'artists',
      options: [
        'Leonardo da Vinci',
        'Vincent van Gogh',
        'Pablo Picasso',
        'Claude Monet',
        'Frida Kahlo',
      ],
    },
    {
      name: 'Categories',
      key: 'category',
      options: [
        'Renaissance',
        'Post-Impressionism',
        'Impressionism',
        'Surrealism',
      ],
    },
    {
      name: 'Size',
      key: 'size',
      options: ['50px', '100px', '200px'],
    },
  ];
}
