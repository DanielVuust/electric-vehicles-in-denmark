import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECarsTableComponent } from './e-cars-table.component';

describe('ECarsTableComponent', () => {
  let component: ECarsTableComponent;
  let fixture: ComponentFixture<ECarsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ECarsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ECarsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
