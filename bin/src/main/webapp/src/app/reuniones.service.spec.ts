import { TestBed } from '@angular/core/testing';

import { ReunionesService } from './reuniones.service';

describe('ReunionesServiceService', () => {
  let service: ReunionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReunionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
