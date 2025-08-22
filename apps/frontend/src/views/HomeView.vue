<script setup lang='ts'>
import { ref } from 'vue';

const message = ref('Hello, World!');
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold underline bg-amber-50 px-2">
      {{ message }}
    </h1>
  </div>
</template>
