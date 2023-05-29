<template>
  <button @click="clicked">HomeView2</button>
  <Child ref="childRef"></Child>
</template>

<script lang="ts" setup>
import {  ref } from 'vue'
import Child from '@/components/Child.vue'
const childRef = ref<InstanceType<typeof Child>>()

const clicked = function () {
  childRef.value?.print()
}
</script>
