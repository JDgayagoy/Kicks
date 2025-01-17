import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Product3Page } from './product3.page';

describe('Product3Page', () => {
  let component: Product3Page;
  let fixture: ComponentFixture<Product3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Product3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
