import { Component, Input, input, TemplateRef, ViewChild } from '@angular/core';
import { Filter } from '../../interfaces/filter';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.scss',
})
export class ProductFilterComponent {
  @Input() filters!: Filter[];

  selectedFilters: { [key: string]: any } = {};
  isFilterOpen = false;

  onFilterClick(filterType: string, value: string) {
    // Toggle the selection - if already selected, deselect (set to null)
    if (this.selectedFilters[filterType] === value) {
      this.selectedFilters[filterType] = null; // Deselect if already selected
    } else {
      this.selectedFilters[filterType] = value; // Select if not selected
    }
  }

  isActive(filterType: string, value: string) {
    return this.selectedFilters[filterType] === value;
  }

  toggleFilter() {
    this.isFilterOpen = !this.isFilterOpen;
  }

  applyFilters() {
    this.toggleFilter();
  }
}
