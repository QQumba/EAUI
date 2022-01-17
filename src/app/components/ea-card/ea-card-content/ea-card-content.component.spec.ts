import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EaCardContentComponent } from './ea-card-content.component';

describe('EaCardContentComponent', () => {
  let component: EaCardContentComponent;
  let fixture: ComponentFixture<EaCardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EaCardContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EaCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
