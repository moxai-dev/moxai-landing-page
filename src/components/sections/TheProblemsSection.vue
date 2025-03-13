<script setup lang="ts">
import Card from 'primevue/card'
import AppAnchorLink from '@/components/AppAnchorLink.vue'
import AppHeadingWithEmoji from '@/components/AppHeadingWithEmoji.vue'
import moaiEmoji from '@/assets/moai-emoji.png'
import { AnchorLinkEnum } from '@/enums/AnchorLinkEnum'

interface Problem {
  title: string
  text: string
}

const problems: Problem[] = [
  {
    title: 'Постоянные вопросы',
    text: 'Новички отвлекают опытных сотрудников от выполнения основных обязанностей',
  },
  {
    title: 'Разрозненные материалы',
    text: 'Разбросаны по документам и файлам, что усложняет быстрый доступ к нужной информации',
  },
  {
    title: 'Низкая вовлечённость',
    text: 'Очное обучение нередко сводится к однообразным занятиям, которые проводятся с одними и теми же вопросами',
  },
  {
    title: 'Мотиавция новичков',
    text: 'Отсутствие интерактивных форматов и персонального подхода негативно сказывается на новых сотрудниках',
  },
]
</script>

<template>
  <section class="relative mx-auto max-w-132">
    <AppAnchorLink :id="AnchorLinkEnum.Problem" />

    <AppHeadingWithEmoji
      class="mb-6"
      :emojiSrc="moaiEmoji"
      emojiClasses="scale-x-[-1]"
      emojiAlt="moai emoji"
    >
      Традиционные методы обучения больше не работают
    </AppHeadingWithEmoji>

    <Card v-for="(problem, index) in problems" class="card !shadow-flat-danger mb-6" :key="index">
      <template #title>
        <h3 class="!text-lg !text-slate-800 dark:!text-slate-100">{{ problem.title }}</h3>
      </template>
      <template #content>
        <p class="!text-slate-700 dark:!text-slate-200">{{ problem.text }}</p>
      </template>
    </Card>

    <div class="border-l-2 border-rose-700/40 dark:border-rose-300/40">
      <h3 class="mb-1 pl-4 text-xl font-semibold text-slate-800 dark:text-slate-100">
        А что в итоге?
      </h3>
      <p class="mb-6 pl-4">
        Компания теряет драгоценное время, стакивается с путаницей в информации и плохой
        обучаемостью стажёров — всё это мешает эффективной адаптации персонала
      </p>
    </div>
  </section>
</template>

<style scoped>
.dark .card {
  --p-card-background: var(--color-neutral-800);
}
</style>
