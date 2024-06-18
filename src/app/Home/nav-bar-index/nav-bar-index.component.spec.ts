import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarIndexComponent } from './nav-bar-index.component';

describe('NavBarIndexComponent', () => {
  let component: NavBarIndexComponent;
  let fixture: ComponentFixture<NavBarIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
