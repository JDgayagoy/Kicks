import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Product4Page } from './product4.page';

describe('Product4Page', () => {
  let component: Product4Page;
  let fixture: ComponentFixture<Product4Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Product4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
