import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Product5Page } from './product5.page';

describe('Product5Page', () => {
  let component: Product5Page;
  let fixture: ComponentFixture<Product5Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Product5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
