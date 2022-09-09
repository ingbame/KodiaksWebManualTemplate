import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementTypesComponent } from './movement-types.component';

describe('MovementTypesComponent', () => {
  let component: MovementTypesComponent;
  let fixture: ComponentFixture<MovementTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovementTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovementTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
