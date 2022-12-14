process.env.NODE_ENV = 'test'

import { expect } from "chai";
import { prueba1Service } from "../../src/services";
import { db } from '../../src/config/connection/database';
import prueba1 from "../../src/models/prueba1.model";
import * as Kafka from "../../src/config/stream/kafka";

describe('prueba1Service Test', () => {

  before('Init', async() => {
    await db.sync({ force: true});
    prueba1.create({
      id: 1,
      name: 'test',
      createdAt: '2020-01-01',
      updatedAt: '2020-01-01'
    });
    prueba1.create({
      id: 2,
      name: 'test2',
      createdAt: '2020-01-01',
      updatedAt: '2020-01-01'
    });

    //Para lanzar pruebas con kafka
    // let topics = [
    //   'pruebas',
    //   'test'
    // ];
    // try{
    //     await Kafka.init(topics);
    //     console.log('Connected to Kafka');

    // }catch(err){
    //     console.log('Error', err);
    // }
  });

  describe('FindAll', async() => {
    it('should return one user', async () => {
      const prueba1: any[] = await prueba1Service.findAll();
      expect(2).equal(prueba1.length);
    });
  });

});