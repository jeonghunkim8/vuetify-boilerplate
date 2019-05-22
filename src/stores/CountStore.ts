import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import Logger from '@/utils/Logger';

@Module({namespaced: true})
export default class CountStore extends VuexModule {

  // states
  public count: number = 0;

  // getters
  get doubledCount() {
    return this.count * 2;
  }

  // mutations
  @Mutation
  public increment(delta: number) {
    Logger.debug(`increment mutation: ${delta}`)
    this.count += delta;
  }

  // actions
  @Action({ commit: 'increment' })
  public incr(delta: number) {
    Logger.debug(`increment action: ${delta}`);
    return delta;
  }

}