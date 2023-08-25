<script setup lang="ts">
import { ref } from 'vue'

import { hello } from '@myopenxui/shared';

const props = withDefaults(defineProps<{
  text?: string;
}>(), {
  text: 'World',
});

function clickHandler() {
  hello(props.text);
}
</script>

<template>
  <button class="openx-button" @click="clickHandler">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
</style>