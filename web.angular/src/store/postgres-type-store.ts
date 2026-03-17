import { BaseStore } from './baseStore';
import { PostgresType } from '../models';

export class PostgresTypeStore extends BaseStore<PostgresType> {
  constructor() {
    super('product/PostgresType');
  }
}
