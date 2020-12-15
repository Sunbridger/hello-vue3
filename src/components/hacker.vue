<template>
    <div>
        <input type="text" v-model="query" >
        <ul>
            <li
                v-for="item of hints"
                :key="item.objectID"
            >
                <a :href="item.url">{{item.title}}</a>
            </li>
        </ul>
        <button @click="setQuery">搜索</button>
    </div>
</template>

<script lang="ts">

import { onMounted, reactive, watchEffect, ref, toRefs } from 'vue';

const URL = 'https://hn.algolia.com/api/v1/search';

// type Prop_ = {}

export default {
    props: {
        objData: {}
    },
    mounted() {

    },
    setup() {
        const state = toRefs(reactive({
            hints: [],
            query: ''
        }));
        console.log(reactive({
            hints: [],
            query: ''
        }), '----', state);
        // let hints = ref([]);
        // let query = ref('');

        const getData = async (query = '') => {
            query = query ? `?query=${query}` : '';
            const data = await fetch(URL + query).then((res) => res.json());
            state.hints.value = data.hits;
        };

        const setQuery = () => {
            getData(state.query.value);
        };

        onMounted(() => {
            getData();
        });

        // toRefs() 给你普通对象下的所有属性加上ref
        // const state = {
        //     hints,
        //     query
        // }

        return {
            ...state,
            setQuery
        };
    }

};
</script>
