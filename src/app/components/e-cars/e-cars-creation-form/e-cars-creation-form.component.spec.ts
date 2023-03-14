import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECarsCreationFormComponent } from './e-cars-creation-form.component';

describe('ECarsCreationFormComponent', () => {
  let component: ECarsCreationFormComponent;
  let fixture: ComponentFixture<ECarsCreationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ECarsCreationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ECarsCreationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
