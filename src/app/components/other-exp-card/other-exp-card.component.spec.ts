import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherExpCardComponent } from './other-exp-card.component';

describe('OtherExpCardComponent', () => {
  let component: OtherExpCardComponent;
  let fixture: ComponentFixture<OtherExpCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherExpCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherExpCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
