import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCalcmeComponent } from './create-calcme.component';

describe('CreateCalcmeComponent', () => {
  let component: CreateCalcmeComponent;
  let fixture: ComponentFixture<CreateCalcmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCalcmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCalcmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
