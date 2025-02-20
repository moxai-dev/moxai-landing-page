<script setup lang="ts">
const props = defineProps<{
  emojiSrc: string
  emojiAlt: string
}>()
</script>

<template>
  <div class="flex items-center gap-x-2">
    <img class="h-10 scale-x-[-1]" :src="props.emojiSrc" :alt="props.emojiAlt" />
    <h2 class="text-xl font-semibold text-slate-800">
      <slot name="default" />
    </h2>
  </div>
</template>
