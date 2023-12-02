import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyVidyaAmpleComponent } from './why-vidya-ample.component';

describe('WhyVidyaAmpleComponent', () => {
  let component: WhyVidyaAmpleComponent;
  let fixture: ComponentFixture<WhyVidyaAmpleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhyVidyaAmpleComponent]
    });
    fixture = TestBed.createComponent(WhyVidyaAmpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
