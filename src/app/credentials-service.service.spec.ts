import { TestBed, inject } from '@angular/core/testing';

import { CredentialsServiceService } from './credentials-service.service';

describe('CredentialsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CredentialsServiceService]
    });
  });

  it('should be created', inject([CredentialsServiceService], (service: CredentialsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
