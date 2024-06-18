import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAdminSingleComponent } from './shop-admin-single.component';

describe('ShopAdminSingleComponent', () => {
  let component: ShopAdminSingleComponent;
  let fixture: ComponentFixture<ShopAdminSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopAdminSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopAdminSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
