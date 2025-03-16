<script setup lang="ts">
const props = defineProps<{
  emojiSrc: string
  emojiAlt: string
  emojiClasses?: string
}>()
</script>

<template>
  <div class="flex items-center gap-x-2">
    <img class="h-10" :class="emojiClasses" :src="props.emojiSrc" :alt="props.emojiAlt" />
    <h2 class="text-xl font-semibold text-slate-800 lg:text-2xl dark:text-slate-100">
      <slot name="default" />
    </h2>
  </div>
</template>
