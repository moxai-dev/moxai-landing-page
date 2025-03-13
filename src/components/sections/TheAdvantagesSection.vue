<script setup lang="ts">
import AppAnchorLink from '@/components/AppAnchorLink.vue'
import AppHeadingWithEmoji from '@/components/AppHeadingWithEmoji.vue'
import rocketEmoji from '@/assets/rocket-emoji.png'
import ArrowDownIcon from '@/components/icons/ArrowDownIcon.vue'
</script>

<template>
  <section class="relative mx-auto max-w-132">
    <AppAnchorLink id="advantages" />

    <AppHeadingWithEmoji class="mb-6" :emojiSrc="rocketEmoji" emojiAlt="rocket emoji">
      Приемущества для вас
    </AppHeadingWithEmoji>

    <div class="text-center">
      <h4 class="text-lg font-semibold text-slate-800 dark:text-slate-100">
        Быстрая адаптация новых сотрудников
      </h4>
      <p>Сокращайте срок стажировки и ускоряйте выход на полную нагрузку</p>
    </div>

    <ArrowDownIcon class="mx-auto my-2 size-12"></ArrowDownIcon>

    <div class="text-center">
      <h4 class="text-lg font-semibold text-slate-800 dark:text-slate-100">
        Экономия времени наставников
      </h4>
      <p>Не нужно дублировать информацию каждому новичку</p>
    </div>

    <ArrowDownIcon class="mx-auto my-2 size-12"></ArrowDownIcon>

    <div class="text-center">
      <h4 class="text-lg font-semibold text-slate-800 dark:text-slate-100">Сокращение ошибок</h4>
      <p>Персонал получает точные, актуальные инструкции из проверенных источников</p>
    </div>

    <ArrowDownIcon class="mx-auto my-2 size-12"></ArrowDownIcon>

    <div class="text-center">
      <h4 class="text-lg font-semibold text-slate-800 dark:text-slate-100">Рост мотивации</h4>
      <p>Интерактивные форматы обучения повышают вовлечённость стажёров</p>
    </div>

    <ArrowDownIcon class="mx-auto my-2 size-12"></ArrowDownIcon>

    <div class="text-center">
      <h4 class="text-lg font-semibold text-slate-800 dark:text-slate-100">Выгодно</h4>
      <p>Бесплатное создание индивидуальной базовой версии</p>
    </div>
  </section>
</template>
