import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication, HttpService, HttpStatus } from '@nestjs/common';
import { ProductModel } from './products.model';
import { ProductService } from './products.services';
import { ProductsModule } from './products.module';
import { ProductsController } from './products.controller';


describe('Products', () => {
    let app: INestApplication;
    const fakeProduct = new ProductModel()
    const mockService = { 
        getAll () {
          return fakeProduct;
        }
    };

    beforeAll(async () => {
        const module = await Test.createTestingModule({
          controllers: [ProductsController], 
            providers: [
                {
                    provide: ProductService,
                    useValue: mockService,
                },
              
            ],
        }).compile();

        app = module.createNestApplication();
        await app.init();
    });
    it(`/GET Products`, () => {
      return request(app.getHttpServer())
          .get('/products/')
          .expect(HttpStatus.OK)
          /*.expect({
              data: mockService.getAll(),
          });*/
  });
});