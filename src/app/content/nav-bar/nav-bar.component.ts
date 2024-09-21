import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  isActive: boolean = false;

  constructor(private router: Router) { }

  redirectToShop() {
  this.router.navigate(['/shop']);
}

  toggleActive() {
    this.isActive = !this.isActive;
  }
}
