<style>
    .flex-box {
        display: flex;
        height: 300px;
        border: 1px solid red;
        align-items: center;
    }
    .btn {
        background-color: antiquewhite;
        line-height: 49px;
    }
</style>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld
    asd="asd"
    @cc="fn"
  />
  <div class="flex-box">
      <p class="btn">按钮</p>
      <div class="btn">按钮</div>
  </div>
    <!-- <Button /> -->
    <NormalJSX name="proooo" :age="12" />
    <!-- <Alwa title="男男女女女" />
    <Hacker /> -->
    {{name}}
    {{page}}
</template>

<script>

import { ref, reactive, computed, getCurrentInstance } from 'vue';

import HelloWorld from './components/HelloWorld.vue';
import Hacker from './components/hacker.vue';
import Button from './components/base-jsx';
import NormalJSX from './components/normal-jsx-prop';
import Alwa from './components/always-jsx';


export default {
  name: 'App',
  components: {
    HelloWorld,
    Hacker,
    Button,
    NormalJSX,
    Alwa
  },
  setup() {
      const msg = ref('Hello Vue 3.0 + Vite');
      const obj = reactive({
          name: 'xxx'
      });
      console.log(msg, obj, '---msg');
      setTimeout(() => {
          msg.value = '改变了';
      }, 2000);
      const page = reactive({
        title: "Hello, World!",
        description: "",
        content: "Hello world",
        wordCount: computed(() => page.content.length)
      });
      return {
          msg,
          ...obj,
          page
      }
  },
  methods: {
      fn() {
          console.log(1111);
      }
  }
}
</script>
