<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Drawer from 'primevue/drawer'
import MoxaiLogoIcon from '@/components/icons/MoxaiLogoIcon.vue'

const visible = ref(false)
const isDark = ref(window.matchMedia('(prefers-color-scheme: dark)').matches)

const openDrawer = () => {
  visible.value = true
}

const closeDrawer = () => {
  visible.value = false
}

const toggleDark = () => {
  document.documentElement.classList.toggle('dark')
  isDark.value = !isDark.value
}

onMounted(() => {
  // при открытии нужно включить ту тему, что у пользователя в системе
})
</script>

<template>
  <header class="flex min-h-16 items-center border-b-1 border-neutral-300/50 dark:bg-black">
    <MoxaiLogoIcon class="mr-4 h-10" />
    <span class="font-title mr-auto text-3xl">MOXAI</span>

    <i v-if="isDark" class="pi pi-moon mr-8 !text-2xl" @click="toggleDark()"></i>
    <i v-else class="pi pi-sun mr-8 !text-2xl" @click="toggleDark()"></i>

    <i class="pi pi-bars !text-2xl text-emerald-600" @click="openDrawer"></i>

    <Drawer v-model:visible="visible" position="right" header="Drawer">
      <div class="flex flex-col gap-y-5">
        <a href="#problem" @click="closeDrawer">О проблеме</a>
        <a href="#solution" @click="closeDrawer">Наше решение</a>
      </div>
    </Drawer>
  </header>
</template>
