<script setup lang="ts">
import Card from 'primevue/card'
import AppAnchorLink from '@/components/AppAnchorLink.vue'
import AppHeadingWithEmoji from '@/components/AppHeadingWithEmoji.vue'
import moaiEmoji from '@/assets/moai-emoji.png'
</script>

<template>
  <section class="relative mx-auto max-w-132">
    <AppAnchorLink id="problem" />

    <AppHeadingWithEmoji
      class="mb-6"
      :emojiSrc="moaiEmoji"
      emojiClasses="scale-x-[-1]"
      emojiAlt="moai emoji"
    >
      Традиционные методы обучения больше не работают
    </AppHeadingWithEmoji>

    <Card class="card !shadow-flat-danger mb-6">
      <template #title>
        <h3 class="!text-lg !text-slate-800 dark:!text-slate-100">Постоянные вопросы</h3>
      </template>
      <template #content>
        <p class="!text-slate-700 dark:!text-slate-200">
          Новички отвлекают опытных сотрудников от выполнения основных обязанностей.
        </p>
      </template>
    </Card>

    <Card class="card !shadow-flat-danger mb-6">
      <template #title>
        <h3 class="!text-lg !text-slate-800 dark:!text-slate-100">Разрозненные материалы</h3>
      </template>
      <template #content>
        <p class="!text-slate-700 dark:!text-slate-200">
          Разбросаны по документам и файлам, что усложняет быстрый доступ к нужной информации
        </p>
      </template>
    </Card>

    <Card class="card !shadow-flat-danger mb-6">
      <template #title>
        <h3 class="!text-lg !text-slate-800 dark:!text-slate-100">Низкая вовлечённость</h3>
      </template>
      <template #content>
        <p class="!text-slate-700 dark:!text-slate-200">
          Очное обучение нередко сводится к однообразным занятиям, которые проводятся с одними и
          теми же вопросами.
        </p>
      </template>
    </Card>

    <Card class="card !shadow-flat-danger mb-6">
      <template #title>
        <h3 class="!text-lg !text-slate-800 dark:!text-slate-100">Мотиавция новичков</h3>
      </template>
      <template #content>
        <p class="!text-slate-700 dark:!text-slate-200">
          Отсутствие интерактивных форматов и персонального подхода негативно сказывается на новых
          сотрудниках
        </p>
      </template>
    </Card>

    <div class="border-l-2 border-rose-700/40 dark:border-rose-300/40">
      <h3 class="mb-1 pl-4 text-xl font-semibold text-slate-800 dark:text-slate-100">
        А что в итоге?
      </h3>
      <p class="mb-6 pl-4">
        Компания теряет драгоценное время, стакивается с путаницей в информации и плохой
        обучаемостью стажёров — всё это мешает эффективной адаптации персонала.
      </p>
    </div>
  </section>
</template>

<style scoped>
.dark .card {
  --p-card-background: var(--color-neutral-800);
}
</style>
