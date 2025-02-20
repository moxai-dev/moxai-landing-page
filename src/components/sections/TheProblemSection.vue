<script setup lang="ts">
import Card from 'primevue/card'
import AppAnchorLink from '@/components/AppAnchorLink.vue'
import AppHeadingWithEmoji from '@/components/AppHeadingWithEmoji.vue'
import moaiEmoji from '@/assets/moai-emoji.png'
</script>

<template>
  <section class="relative mx-auto max-w-132">
    <AppAnchorLink id="problem" />

    <AppHeadingWithEmoji class="mb-6" :emojiSrc="moaiEmoji" emojiAlt="moai emoji">
      Традиционные методы обучения больше не работают
    </AppHeadingWithEmoji>

    <Card class="!shadow-flat-danger mb-6 !bg-red-400/10">
      <template #title>
        <span class="!text-lg !text-slate-800">Постоянные вопросы</span>
      </template>
      <template #content>
        <p>Новички отвлекают опытных сотрудников от выполнения основных обязанностей.</p>
      </template>
    </Card>

    <Card class="!shadow-flat-danger mb-6 !bg-red-400/10">
      <template #title>
        <span class="!text-lg !text-slate-800"> Разрозненные материалы </span>
      </template>
      <template #content>
        Разбросаны по документам и файлам, что усложняет быстрый доступ к нужной информации
      </template>
    </Card>

    <Card class="!shadow-flat-danger mb-6 !bg-red-400/10">
      <template #title>
        <span class="!text-lg !text-slate-800"> Низкая вовлечённость </span>
      </template>
      <template #content>
        Очное обучение нередко сводится к однообразным занятиям, которые проводятся с одними и теми
        же вопросами.
      </template>
    </Card>

    <Card class="!shadow-flat-danger mb-6 !bg-red-400/10">
      <template #title>
        <span class="!text-lg !text-slate-800"> Мотиавция новичков </span>
      </template>
      <template #content>
        Отсутствие интерактивных форматов и персонального подхода негативно сказывается на новых
        сотрудниках
      </template>
    </Card>

    <h3 class="mb-1 text-xl font-semibold text-slate-800">А что в итоге?</h3>
    <p class="mb-6 border-l-2 border-red-400 pl-4">
      Компания теряет драгоценное время, сталкивается с путаницей в информации и плохой обучаемостью
      стажёров — всё это мешает эффективной адаптации персонала.
    </p>
  </section>
</template>
