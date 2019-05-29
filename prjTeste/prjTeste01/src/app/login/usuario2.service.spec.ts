import { TestBed } from '@angular/core/testing';

import { Usuario2Service } from './usuario2.service';

describe('Usuario2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Usuario2Service = TestBed.get(Usuario2Service);
    expect(service).toBeTruthy();
  });
});
