import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanksUserComponent } from './thanks-user.component';

describe('ThanksUserComponent', () => {
  let component: ThanksUserComponent;
  let fixture: ComponentFixture<ThanksUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThanksUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThanksUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
