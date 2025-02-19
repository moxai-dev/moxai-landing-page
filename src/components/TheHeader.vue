<script setup lang="ts">
import { ref } from 'vue'
import Drawer from 'primevue/drawer'
import MoxaiLogoIcon from '@/components/icons/MoxaiLogoIcon.vue'

const visible = ref(false)
</script>

<template>
  <header class="border- flex min-h-16 items-center border-b-1 border-neutral-300/50">
    <MoxaiLogoIcon class="mr-4 h-10" />
    <span class="font-title mr-auto text-3xl">MOXAI</span>

    <Drawer v-model:visible="visible" position="right" header="Drawer">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </Drawer>
    <i @click="visible = true" class="pi pi-bars text-4xl text-emerald-600"></i>
  </header>
</template>
