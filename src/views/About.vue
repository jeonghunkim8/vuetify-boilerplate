<template>
  <div class="about">
    <h1>UserList</h1>
    <v-btn @click="getUserList">getUserList</v-btn>
    <ul>
      <li v-for="(user, key) in userList" :key="key">
        {{user.id}}: {{user.name}} / {{user.birth}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace, State, Action, Getter } from 'vuex-class';
import { Logger } from '@/utils';
import { User } from '@/types';

const CountStoreModule = namespace('CountStore');

@Component
export default class About extends Vue {

  @CountStoreModule.Action('getUserList')
  private getUserList?: () => void;

  @CountStoreModule.State('users')
  private userList?: User[];

}
</script>