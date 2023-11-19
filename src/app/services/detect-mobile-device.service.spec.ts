import { TestBed } from '@angular/core/testing';

import { DetectMobileDeviceService } from './detect-mobile-device.service';

describe('DetectMobileDeviceService', () => {
  let service: DetectMobileDeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetectMobileDeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
