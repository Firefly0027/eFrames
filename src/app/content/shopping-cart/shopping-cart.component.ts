import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ConstantURL } from '../../Constants/ConstantsURL';
import { Filter } from '../../interfaces/filter';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',
})
export class ShoppingCartComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Leonardo da Vinci',
      category: 'Classic Art',
      imageUrl: '/assets/Leonardo-da-Vinci.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!',
      price: 96.0,
    },
    {
      id: 2,
      name: 'Vincent van Gogh',
      category: 'Classic Art',
      imageUrl: '/assets/starry-nights.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!',
      price: 50.0,
    },
    {
      id: 3,
      name: 'The Duke of Wellington',
      category: 'Classic Art',
      imageUrl: '/assets/PabloPicasso.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!',
      price: 50.0,
    },
    {
      id: 4,
      name: 'Leonardo da Vinci_s The Virgin and Child with Saint Anne (circa 1503)',
      category: 'Classic Art',
      imageUrl: '/assets/Leonardo-da-Vinci.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!',
      price: 50.0,
    },
    {
      id: 5,
      name: 'Sandro Botticelli_s The Birth of Venus (1485) aesthetic painting',
      category: 'Classic Art',
      imageUrl: '/assets/PabloPicasso.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!',
      price: 50.0,
    },
    {
      id: 6,
      name: 'Cupid and Psyche, painting by Jacques-Louis David (1817)',
      category: 'Classic Art',
      imageUrl: '/assets/Leonardo-da-Vinci.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!',
      price: 50.0,
    },
    {
      id: 7,
      name: 'Ginevra de_ Benci (ca.1474–1478)by Leonardo da Vinci',
      category: 'Classic Art',
      imageUrl: '/assets/Michelangelo.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!',
      price: 50.0,
    },
    {
      id: 8,
      name: 'Pablo Picasso',
      category: 'Classic Art',
      imageUrl: '/assets/Leonardo-da-Vinci.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!',
      price: 50.0,
    },
    {
      id: 9,
      name: 'Raphael_s Bindo Altoviti (ca. 1515) famous painting',
      category: 'Classic Art',
      imageUrl: '/assets/starry-nights.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!',
      price: 50.0,
    },
    {
      id: 10,
      name: 'Michelangelo',
      category: 'Classic Art',
      imageUrl: '/assets/Michelangelo.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!',
      price: 50.0,
    },
  ];

  filters: Filter[] = [
    {
      name: 'Frames',
      key: 'frames',
      options: [
        'Wooden Frames',
        'Metal Frames',
        'Floating Frames',
        'Collage Frames',
        'Digital Frames',
      ],
    },
    {
      name: 'Categories',
      key: 'category',
      options: ['Traditional', 'Modern', 'Contemporary', 'Minimalist'],
    },
    {
      name: 'Size',
      key: 'size',
      options: ['8" x 10"', '11" x 14"', '16" x 20"'],
    },
  ];

  artistsURL = ConstantURL.ArtistsURL;
}
