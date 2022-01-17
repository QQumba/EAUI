import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EaCardDividerComponent } from './ea-divider.component';

describe('EaCardDividerComponent', () => {
  let component: EaCardDividerComponent;
  let fixture: ComponentFixture<EaCardDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EaCardDividerComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EaCardDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
