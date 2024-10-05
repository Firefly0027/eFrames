import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ConstantURL } from '../../Constants/ConstantsURL';

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
  artistsURL = ConstantURL.ArtistsURL;

  setActiveSlide(slide: any) {
    this.activeSlide = slide;
  }
}
