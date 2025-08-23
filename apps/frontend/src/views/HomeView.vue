<script setup lang='ts'>
import { Button } from '@qrq-repo/ui';
import { ref } from 'vue';
import '@qrq-repo/ui/styles';

const message = ref('Hello, World!');
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold underline bg-amber-50 px-2">
      {{ message }}
    </h1>
    <Button variant="destructive" size="lg">
      Delete Item
    </Button>
  </div>
</template>
