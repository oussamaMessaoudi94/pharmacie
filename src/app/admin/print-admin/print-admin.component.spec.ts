import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintAdminComponent } from './print-admin.component';

describe('PrintAdminComponent', () => {
  let component: PrintAdminComponent;
  let fixture: ComponentFixture<PrintAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
