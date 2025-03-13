<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Drawer from 'primevue/drawer'
import MoxaiLogoIcon from '@/components/icons/MoxaiLogoIcon.vue'

const isDrawerVisible = ref(false)

const openDrawer = () => {
  isDrawerVisible.value = true
}

const closeDrawer = () => {
  isDrawerVisible.value = false
}

const isPreferableDarkMode = localStorage.getItem('theme-mode') == 'dark'
const isPreferableLightMode = localStorage.getItem('theme-mode') == 'light'
const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)')
const isDarkMode = ref(!isPreferableLightMode && (mediaQueryList.matches || isPreferableDarkMode))

const toggleDarkMode = () => {
  if (isPreferableDarkMode || isPreferableLightMode) {
    return
  }

  document.documentElement.classList.toggle('dark')
  isDarkMode.value = !isDarkMode.value
}

const setPreferableMode = () => {
  document.documentElement.classList.toggle('dark')
  isDarkMode.value = !isDarkMode.value

  if (isDarkMode.value) {
    localStorage.setItem('theme-mode', 'dark')
  } else {
    localStorage.setItem('theme-mode', 'light')
  }
}

onMounted(() => {
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  }

  mediaQueryList.onchange = toggleDarkMode
})
</script>

<template>
  <header class="flex min-h-16 items-center border-b-1 border-neutral-300/50">
    <MoxaiLogoIcon class="mr-2 h-11 text-slate-800 dark:text-slate-100" />
    <span class="font-inter text-bold mr-auto text-3xl font-black">MOXAI</span>

    <i v-if="isDarkMode" class="pi pi-moon mr-8 !text-2xl" @click="setPreferableMode()"></i>
    <i v-else class="pi pi-sun mr-8 !text-2xl" @click="setPreferableMode()"></i>

    <i class="pi pi-bars !text-2xl text-slate-800 dark:text-slate-100" @click="openDrawer"></i>

    <Drawer v-model:visible="isDrawerVisible" position="right" header="Меню">
      <div class="flex flex-col gap-y-5">
        <a href="#problem" @click="closeDrawer">О проблеме</a>
        <a href="#solution" @click="closeDrawer">Наше решение</a>
        <a href="#how-it-works" @click="closeDrawer">Как это работает?</a>
        <a href="#examples" @click="closeDrawer">Примеры</a>
        <a href="#advantages" @click="closeDrawer">Приемущества</a>
        <a href="#cases" @click="closeDrawer">Кейсы</a>
        <a href="#about-us" @click="closeDrawer">О нас</a>
        <a href="#contact-form" @click="closeDrawer">Оставить заявку</a>
      </div>
    </Drawer>
  </header>
</template>
