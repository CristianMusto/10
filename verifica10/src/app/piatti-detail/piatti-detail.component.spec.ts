import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiattiDetailComponent } from './piatti-detail.component';

describe('PiattiDetailComponent', () => {
  let component: PiattiDetailComponent;
  let fixture: ComponentFixture<PiattiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiattiDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiattiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
