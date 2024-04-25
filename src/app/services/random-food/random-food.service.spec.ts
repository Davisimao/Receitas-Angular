import { TestBed } from '@angular/core/testing';

import { RandomFoodService } from './random-food.service';

describe('RandomFoodService', () => {
  let service: RandomFoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomFoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
