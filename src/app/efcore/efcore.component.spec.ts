import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EfcoreComponent } from './efcore.component';

describe('EfcoreComponent', () => {
  let component: EfcoreComponent;
  let fixture: ComponentFixture<EfcoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EfcoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EfcoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
