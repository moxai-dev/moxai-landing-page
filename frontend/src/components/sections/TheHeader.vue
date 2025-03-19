<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Drawer from 'primevue/drawer'
import MoxaiLogoIcon from '@/components/icons/MoxaiLogoIcon.vue'
import { AnchorLinkEnum } from '@/enums/AnchorLinkEnum'

const isDrawerVisible = ref(false)

const openDrawer = () => {
  isDrawerVisible.value = true
}

const closeDrawer = () => {
  isDrawerVisible.value = false
}

interface Link {
  text: string
  to: AnchorLinkEnum
}

const links: Link[] = [
  { text: 'О проблеме', to: AnchorLinkEnum.Problem },
  { text: 'Наше решение', to: AnchorLinkEnum.Solution },
  { text: 'Как это работает?', to: AnchorLinkEnum.HowItWorks },
  { text: 'Примеры', to: AnchorLinkEnum.Examples },
  { text: 'Приемущества', to: AnchorLinkEnum.Advantages },
  { text: 'Кейсы', to: AnchorLinkEnum.Cases },
  { text: 'О нас', to: AnchorLinkEnum.AboutUs },
  { text: 'Оставить заявку', to: AnchorLinkEnum.ContactForm },
]

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
    <div class="mx-auto flex w-full max-w-132 items-center md:max-w-184 lg:max-w-236 xl:max-w-6xl">
      <MoxaiLogoIcon class="mr-2 h-11 text-slate-800 dark:text-slate-100" />
      <span class="font-inter text-bold mr-auto text-3xl font-black">MOXAI</span>

      <i v-if="isDarkMode" class="pi pi-moon mr-8 !text-2xl" @click="setPreferableMode()"></i>
      <i v-else class="pi pi-sun mr-8 !text-2xl" @click="setPreferableMode()"></i>

      <i class="pi pi-bars !text-2xl text-slate-800 dark:text-slate-100" @click="openDrawer"></i>

      <Drawer v-model:visible="isDrawerVisible" position="right" header="Меню">
        <div class="flex flex-col gap-y-5">
          <a v-for="(link, index) in links" :href="'#' + link.to" :key="index" @click="closeDrawer">
            {{ link.text }}
          </a>
        </div>
      </Drawer>
    </div>
  </header>
</template>
