<script setup lang="ts">
const props = defineProps<{
  id: string
}>()
</script>

<template>
  <div :id="props.id" class="invisible absolute -top-5 size-0"></div>
</template>
