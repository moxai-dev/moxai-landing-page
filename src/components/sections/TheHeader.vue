<script setup lang="ts">
import { ref } from 'vue'
import Drawer from 'primevue/drawer'
import MoxaiLogoIcon from '@/components/icons/MoxaiLogoIcon.vue'

const visible = ref(false)

const openDrawer = () => {
  visible.value = true
}

const closeDrawer = () => {
  visible.value = false
}
</script>

<template>
  <header class="border- flex min-h-16 items-center border-b-1 border-neutral-300/50">
    <MoxaiLogoIcon class="mr-4 h-10" />
    <span class="font-title mr-auto text-3xl">MOXAI</span>

    <Drawer v-model:visible="visible" position="right" header="Drawer">
      <div class="flex flex-col gap-y-5">
        <a href="#problem" @click="closeDrawer">О проблеме</a>
        <a href="#solution" @click="closeDrawer">Наше решение</a>
      </div>
    </Drawer>
    <i @click="openDrawer" class="pi pi-bars text-4xl text-emerald-600"></i>
  </header>
</template>
