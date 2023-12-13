import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingMethodlogyComponent } from './teaching-methodlogy.component';

describe('TeachingMethodlogyComponent', () => {
  let component: TeachingMethodlogyComponent;
  let fixture: ComponentFixture<TeachingMethodlogyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeachingMethodlogyComponent]
    });
    fixture = TestBed.createComponent(TeachingMethodlogyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
