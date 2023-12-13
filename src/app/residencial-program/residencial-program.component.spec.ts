import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidencialProgramComponent } from './residencial-program.component';

describe('ResidencialProgramComponent', () => {
  let component: ResidencialProgramComponent;
  let fixture: ComponentFixture<ResidencialProgramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResidencialProgramComponent]
    });
    fixture = TestBed.createComponent(ResidencialProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
