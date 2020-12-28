<template>
    <div @click="clickFn">btnasda</div>
</template>
<script lang="ts">
  import { PropType } from 'vue';

  import { defineComponent, computed, ref, unref, nextTick } from 'vue';




enum Gender {
   pass = 'pass-icon',
   fail = 'fail-icon',
   pending = 'pending-icon'
}

  export default defineComponent({
    name: 'AButton',
    inheritAttrs: false,
    props: {
      // 按钮类型
      type: {
        type: String as PropType<'primary' | 'default' | 'danger' | 'dashed' | 'link'>,
        default: 'default',
      },
      // 节流防抖类型 throttle debounce
      throttle: {
        type: String as PropType<'throttle' | 'debounce'>,
        default: 'throttle',
      },
      color: {
        type: String as PropType<'error' | 'warning' | 'success'>,
      },
      // 防抖节流时间
      throttleTime: {
        type: Number as PropType<number>,
        default: 0,
      },
      loading: {
        type: Boolean as PropType<boolean>,
        default: false,
      },
      disabled: {
        type: Boolean as PropType<boolean>,
        default: false,
      },
    },
    setup(props, ctx) {
        console.log(Gender.pass);

        type Record<K extends string | number | symbol, T extends string | number> = { [x in K]: T; }

        const map: Record<string, string> = {
            true: 'as'
        };

        const arr: string[] = ['as', '1'];
        const arr2: Array<string | Number> = ['asd', 1]
        console.log(arr, '--a');
        function clickFn(str?: string): void {
            console.log(1);
            // ctx.emit('click', 'value');
        }

        return {
            clickFn
        }
    }
  });
</script>
