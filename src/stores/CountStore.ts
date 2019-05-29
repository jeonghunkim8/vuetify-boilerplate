import { Module, VuexModule, Mutation, Action, MutationAction } from 'vuex-module-decorators';
import Logger from '@/utils/Logger';
import User from '@/types/User';
import HttpHelper from '@/utils/HttpHelper';

@Module({namespaced: true})
export default class CountStore extends VuexModule {

  // states
  public count: number = 0;
  public users: User[] = [];

  // getters
  get doubledCount() {
    return this.count * 2;
  }

  // mutations
  @Mutation
  public increment(delta: number) {
    Logger.debug(`increment mutation: ${delta}`);
    this.count += delta;
  }

  // actions
  @Action({ commit: 'increment' })
  public incr(delta: number) {
    Logger.debug(`increment action: ${delta}`);
    return delta;
  }

  //mutation + action
  @MutationAction({ mutate: ['users'] })
  public async getUserList(a: string) {
    const response = await HttpHelper.get<User[]>('http://localhost/users.json');
    Logger.debug(response.data);
    return {
      users: response.data
    };
  }

}

