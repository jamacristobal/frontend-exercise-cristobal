import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompModalComponent } from './comp-modal.component';

describe('CompModalComponent', () => {
  let component: CompModalComponent;
  let fixture: ComponentFixture<CompModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
