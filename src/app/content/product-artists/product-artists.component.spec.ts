import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductArtistsComponent } from './product-artists.component';

describe('ProductArtistsComponent', () => {
  let component: ProductArtistsComponent;
  let fixture: ComponentFixture<ProductArtistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductArtistsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
