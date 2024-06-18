import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanksAdminComponent } from './thanks-admin.component';

describe('ThanksAdminComponent', () => {
  let component: ThanksAdminComponent;
  let fixture: ComponentFixture<ThanksAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThanksAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThanksAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
