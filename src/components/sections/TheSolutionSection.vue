<script setup lang="ts">
import Carousel from 'primevue/carousel'
import AppAnchorLink from '@/components/AppAnchorLink.vue'
import AppHeadingWithEmoji from '@/components/AppHeadingWithEmoji.vue'
import clipboardEmoji from '@/assets/clipboard-emoji.png'
import { AnchorLinkEnum } from '@/enums/AnchorLinkEnum'

interface CarouselCard {
  title: string
  text: string
  icon: string
}

const carouselData: CarouselCard[] = [
  {
    title: 'Единая база знаний',
    text: 'Все стандарты компании, регламенты и видеоуроки – в одном месте',
    icon: 'pi-database',
  },
  {
    title: 'Полная адаптация',
    text: 'Подстраиваемся под специфику вашей компании (стандарты, стилистика)',
    icon: 'pi-globe',
  },
  {
    title: 'Автоматизация тестирования',
    text: 'Удобные тесты и квизы, чтобы убедиться в понимании ключевых моментов сотрудниками',
    icon: 'pi-check-square',
  },
  {
    title: 'ИИ-помощник 24/7',
    text: 'ИИ отвечает на вопросы стажёров в реальном времени, разгружая менеджеров и опытных сотрудников',
    icon: 'pi-calendar-clock',
  },
  {
    title: 'Лёгкая интеграция',
    text: 'Готовое решение для обучения в Telegram – удобно, привычно, доступно',
    icon: 'pi-telegram',
  },
]
</script>

<template>
  <section class="relative mx-auto max-w-132">
    <AppAnchorLink :id="AnchorLinkEnum.Solution" />

    <AppHeadingWithEmoji class="mb-6" :emojiSrc="clipboardEmoji" emojiAlt="clipboard emoji">
      Наше решение для вашей проблемы
    </AppHeadingWithEmoji>

    <Carousel
      class="carousel mb-6"
      circular
      :showIndicators="false"
      :value="carouselData"
      :numVisible="1"
      :numScroll="1"
    >
      <template #item="{ data }">
        <div
          class="mx-4 h-56 rounded-2xl border border-slate-200 bg-gradient-to-r from-emerald-500/5 to-lime-500/5 p-4 dark:border-slate-700 dark:from-emerald-300/5 dark:to-lime-300/5"
        >
          <div class="mb-4 flex items-center justify-between border-b-2 border-slate-200 pb-2">
            <h3 class="max-w-40 text-lg font-semibold text-slate-800 dark:text-slate-100">
              {{ data.title }}
            </h3>
            <div class="rounded-2xl bg-slate-800 p-4">
              <i class="pi !text-4xl text-white" :class="data.icon"></i>
            </div>
          </div>

          <p>{{ data.text }}</p>
        </div>
      </template>
    </Carousel>

    <p>Предлагаем реализацию в виде Телеграм-бота или TMA (Telegram Mini App)</p>
  </section>
</template>

<style scoped>
.carousel {
  --p-button-icon-only-width: 1.5rem;
  --p-button-padding-y: 0;
  --p-button-padding-x: 0;
}
</style>
