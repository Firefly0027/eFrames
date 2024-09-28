import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.css',
  animations: [
    trigger('slideInFromLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate(
          '500ms ease-out',
          style({ transform: 'translateX(0)', opacity: 1 })
        ),
      ]),
      transition(':leave', [
        animate(
          '500ms ease-in',
          style({ transform: 'translateX(-100%)', opacity: 0 })
        ),
      ]),
    ]),
  ],
})
export class ProductFilterComponent {
  @ViewChild('filterDialog') filterDialog!: TemplateRef<any>;
  categories = [
    'New Releases',
    'Roma Elite',
    'Roma One',
    'Simply Roma',
    'Roma Contract',
    'Gallery Frames',
    'Photo Frames',
    'Mirrors',
    'Stretchers',
    'Fillets',
    'Leaving Soon',
  ];
  collections = [
    { name: 'Arber', count: 133 },
    { name: 'Bambu', count: 2 },
    { name: 'Belle Epoque', count: 12 },
    { name: 'Boccaccio', count: 4 },
    { name: 'Burlwood', count: 15 },
    { name: 'Cabane', count: 7 },
    { name: 'Cavio', count: 6 },
    { name: 'Como', count: 5 },
    { name: 'Cortona', count: 9 },
  ];
  shapes = ['Rectangle', 'Square', 'Oval', 'Circle'];
  colors = [
    { name: 'Black', count: 348 },
    { name: 'Blue', count: 37 },
    { name: 'Bronze', count: 23 },
    { name: 'Brown', count: 197 },
    { name: 'Champagne', count: 7 },
  ];
  finishes = ['Gloss', 'Matte', 'Metallic'];

  constructor(private dialog: MatDialog) {}

  openFilterDialog(): void {
    const dialogRef = this.dialog.open(this.filterDialog, {
      width: '500px',
      position: { left: '30px' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
