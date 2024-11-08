import { Test, TestingModule } from '@nestjs/testing';
import { Assignment1Controller } from './assignment1.controller';

describe('Assignment1Controller', () => {
  let controller: Assignment1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Assignment1Controller],
    }).compile();

    controller = module.get<Assignment1Controller>(Assignment1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
