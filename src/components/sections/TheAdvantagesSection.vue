<script setup lang="ts">
import AppAnchorLink from '@/components/AppAnchorLink.vue'
import AppHeadingWithEmoji from '@/components/AppHeadingWithEmoji.vue'
import ArrowDownIcon from '@/components/icons/ArrowDownIcon.vue'
import rocketEmoji from '@/assets/rocket-emoji.png'
import { AnchorLinkEnum } from '@/enums/AnchorLinkEnum'

interface Advantage {
  title: string
  text: string
}

const advantages: Advantage[] = [
  {
    title: 'Быстрая адаптация новых сотрудников',
    text: 'Сокращайте срок стажировки и ускоряйте выход на полную нагрузку',
  },
  {
    title: 'Экономия времени наставников',
    text: 'Не нужно дублировать информацию каждому новичку',
  },
  {
    title: 'Сокращение ошибок',
    text: 'Персонал получает точные, актуальные инструкции из проверенных источников',
  },
  {
    title: 'Рост мотивации',
    text: 'Интерактивные форматы обучения повышают вовлечённость стажёров',
  },
  {
    title: 'Выгодно',
    text: 'Бесплатное создание индивидуальной базовой версии',
  },
]
</script>

<template>
  <section class="relative mx-auto max-w-132 md:max-w-184 lg:max-w-236 xl:max-w-6xl">
    <AppAnchorLink :id="AnchorLinkEnum.Advantages" />

    <AppHeadingWithEmoji class="mb-6" :emojiSrc="rocketEmoji" emojiAlt="rocket emoji">
      Приемущества для вас
    </AppHeadingWithEmoji>

    <template v-for="(advantage, index) in advantages" :key="index">
      <div class="text-center">
        <h4 class="text-lg font-semibold text-slate-800 md:mb-2 dark:text-slate-100">
          {{ advantage.title }}
        </h4>
        <p class="">{{ advantage.text }}</p>
      </div>

      <ArrowDownIcon v-if="index != advantages.length - 1" class="mx-auto my-2 size-12" />
    </template>
  </section>
</template>
