import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcmeListComponent } from './calcme-list.component';

describe('CalcmeListComponent', () => {
  let component: CalcmeListComponent;
  let fixture: ComponentFixture<CalcmeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcmeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcmeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
