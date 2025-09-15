import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpGetComponentComponent } from './emp-get-component.component';

describe('EmpGetComponentComponent', () => {
  let component: EmpGetComponentComponent;
  let fixture: ComponentFixture<EmpGetComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpGetComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpGetComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
