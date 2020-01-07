import { HttpStatus } from '@nestjs/common';
import * as request from 'supertest';
import { app } from './constants';

describe('PRODUCTS', () => {
  it('should list all products', () => {
    return request(app)
      .get('/products')
      .expect(HttpStatus.OK);
  });
});