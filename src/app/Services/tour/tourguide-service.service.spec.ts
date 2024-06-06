import { TestBed } from '@angular/core/testing';

import { TourguideServiceService } from './tourguide-service.service';

describe('TourguideServiceService', () => {
  let service: TourguideServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TourguideServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
