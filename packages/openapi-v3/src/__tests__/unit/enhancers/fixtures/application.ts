import {Application, createBindingFromClass} from '@loopback/core';
import {OASEnhancerService, OAS_ENHANCER_SERVICE} from '../../../..';
import {InfoSpecEnhancer} from './info.spec.extension';
import {SecuritySpecEnhancer} from './security.spec.extension';

export class SpecServiceApplication extends Application {
  constructor() {
    super();
    this.add(
      createBindingFromClass(OASEnhancerService, {
        key: OAS_ENHANCER_SERVICE,
      }),
    );
    this.add(createBindingFromClass(SecuritySpecEnhancer));
    this.add(createBindingFromClass(InfoSpecEnhancer));
  }

  async main() {}

  getSpecService() {
    return this.get(OAS_ENHANCER_SERVICE);
  }
}
