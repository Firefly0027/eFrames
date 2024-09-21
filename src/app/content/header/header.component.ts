import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isActive: boolean = false;

  constructor(private router: Router) { }

  redirectToShop() {
  this.router.navigate(['/shop']);
}

  toggleActive() {
    this.isActive = !this.isActive;
  }
}
