<template>
  <HelloWorld :count="count" :doubledCount="doubledCount" @onIncr="incr"/>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace, State, Action, Getter } from 'vuex-class';
import HelloWorld from '@/components/HelloWorld.vue';

const CountStoreModule = namespace('CountStore');

@Component({
  components: {
    HelloWorld,
  }
})
export default class Home extends Vue {
  @CountStoreModule.State('count')
  private count!: number;

  @CountStoreModule.Getter('doubledCount')
  private doubledCount!: number;

  @CountStoreModule.Action('incr')
  private incr!: (delta: number) => void;

}
</script>