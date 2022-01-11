import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimaliDetailComponent } from './animali-detail.component';

describe('AnimaliDetailComponent', () => {
  let component: AnimaliDetailComponent;
  let fixture: ComponentFixture<AnimaliDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimaliDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimaliDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
