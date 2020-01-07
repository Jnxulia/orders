import { HttpStatus } from '@nestjs/common';
import axios from 'axios';
import * as mongoose from 'mongoose';

import * as request from 'supertest';
import { app } from './constants';



describe('Orders', () => {
  it('should list all Orders', () => {
    return request(app)
      .get('/orders')
      .expect(HttpStatus.OK);
  });
});