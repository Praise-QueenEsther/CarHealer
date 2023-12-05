import { TestBed } from '@angular/core/testing';

import { ImageNameService } from './image-name.service';

describe('ImageNameService', () => {
  let service: ImageNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
