import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUerComponent } from './about-uer.component';

describe('AboutUerComponent', () => {
  let component: AboutUerComponent;
  let fixture: ComponentFixture<AboutUerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
