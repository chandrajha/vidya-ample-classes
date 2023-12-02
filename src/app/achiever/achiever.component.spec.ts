import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchieverComponent } from './achiever.component';

describe('AchieverComponent', () => {
  let component: AchieverComponent;
  let fixture: ComponentFixture<AchieverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AchieverComponent]
    });
    fixture = TestBed.createComponent(AchieverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
