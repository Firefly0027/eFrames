import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',
})
export class ShoppingCartComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Baldassare Castiglione, by Raffaello Sanzio',
      category: 'Classic Art',
      imageUrl:
        '/assets/Classical Art/Baldassare Castiglione, by Raffaello Sanzio.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!',
      oldPrice: 96.0,
      newPrice: 230.99,
      badge: 'Hot',
    },
    // Add more products up to 8 as desired
    {
      id: 2,
      name: 'Equestrian Portrait of the Duke of Lerma (1603) baroque oil painting by Peter Paul Rubens.',
      category: 'Classic Art',
      imageUrl: '/assets/Classical Art/Equestrian.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!',
      oldPrice: 50.0,
      newPrice: 29.99,
      badge: 'Sale',
    },
    {
      id: 3,
      name: 'The Duke of Wellington',
      category: 'Classic Art',
      imageUrl: '/assets/Classical Art/The Duke of Wellington.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!',
      oldPrice: 50.0,
      newPrice: 29.99,
      badge: 'Hot',
    },
    {
      id: 4,
      name: 'Leonardo da Vinci_s The Virgin and Child with Saint Anne (circa 1503)',
      category: 'Classic Art',
      imageUrl:
        '/assets/Classical Art/Leonardo da Vinci_s The Virgin and Child with Saint Anne (circa 1503).jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!',
      oldPrice: 50.0,
      newPrice: 29.99,
      badge: 'Sale',
    },
    {
      id: 5,
      name: 'Sandro Botticelli_s The Birth of Venus (1485) aesthetic painting',
      category: 'Classic Art',
      imageUrl:
        '/assets/Classical Art/Sandro Botticelli_s The Birth of Venus (1485) aesthetic painting.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!',
      oldPrice: 50.0,
      newPrice: 29.99,
      badge: 'Sale',
    },
    {
      id: 6,
      name: 'Cupid and Psyche, painting by Jacques-Louis David (1817)',
      category: 'Classic Art',
      imageUrl:
        '/assets/Classical Art/Cupid and Psyche, painting by Jacques-Louis David (1817).jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!',
      oldPrice: 50.0,
      newPrice: 29.99,
      badge: 'Sale',
    },
    {
      id: 7,
      name: 'Ginevra de_ Benci (ca.1474–1478)by Leonardo da Vinci',
      category: 'Classic Art',
      imageUrl:
        '/assets/Classical Art/Ginevra de_ Benci by Leonardo da Vinci.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!',
      oldPrice: 50.0,
      newPrice: 29.99,
      badge: 'Sale',
    },
    {
      id: 8,
      name: 'Leonardo da Vinci_s Baptism of Christ',
      category: 'Classic Art',
      imageUrl:
        '/assets/Classical Art/Leonardo da Vinci_s Baptism of Christ.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!',
      oldPrice: 50.0,
      newPrice: 29.99,
      badge: 'Sale',
    },
    {
      id: 9,
      name: 'Raphael_s Bindo Altoviti (ca. 1515) famous painting',
      category: 'Classic Art',
      imageUrl:
        '/assets/Classical Art/Raphael_s Bindo Altoviti (ca. 1515) famous painting.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!',
      oldPrice: 50.0,
      newPrice: 29.99,
      badge: 'Sale',
    },
    {
      id: 10,
      name: 'Study of a Nude Man, Follower of Pierre Narcisse Guérin',
      category: 'Classic Art',
      imageUrl:
        '/assets/Classical Art/Study of a Nude Man, Follower of Pierre Narcisse Guérin.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!',
      oldPrice: 50.0,
      newPrice: 29.99,
      badge: 'Sale',
    },
    // Add the remaining products...
  ];

  slides = [
    {
      image: '/assets/Abstract-photos/harles-Demuth.jpg',
      title: 'Slide 1 Title',
      description: 'Description for Slide 1.',
    },
    {
      image: '/assets/Abstract-photos/white.jpg',
      title: 'Slide 2 Title',
      description: 'Description for Slide 2.',
    },
    {
      image: '/assets/Abstract-photos/Abstrac-Landscape.jpg',
      title: 'Slide 3 Title',
      description: 'Description for Slide 3.',
    },
    {
      image: '/assets/Abstract-photos/Winds.jpg',
      title: 'Slide 4 Title',
      description: 'Description for Slide 4.',
    },
    {
      image: '/assets/Abstract-photos/Pieta.jpg',
      title: 'Slide 4 Title',
      description: 'Description for Slide 4.',
    },
  ];
  activeSlide = this.slides[0];

  setActiveSlide(slide: any) {
    this.activeSlide = slide;
  }
}
