import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConstantURL } from '../../Constants/ConstantsURL';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  menuOpen = false;
  artistsURL = ConstantURL.ArtistsURL;
  shopURL = ConstantURL.ShopURL;

  constructor(private router: Router) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
