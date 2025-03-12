<script setup lang="ts">
import Card from 'primevue/card'
import AppAnchorLink from '@/components/AppAnchorLink.vue'
import AppHeadingWithEmoji from '@/components/AppHeadingWithEmoji.vue'
import magnifyingGlassEmoji from '@/assets/magnifying-glass-tilted-right.png'
</script>

<template>
  <section class="relative mx-auto max-w-132">
    <AppAnchorLink id="about-us" />

    <AppHeadingWithEmoji
      class="mb-6"
      :emojiSrc="magnifyingGlassEmoji"
      emojiAlt="magnifying glass emoji"
    >
      О нас
    </AppHeadingWithEmoji>

    <Card>
      <template #content>
        <p class="text-lg !text-slate-700 dark:!text-slate-200">
          Наша команда обладает более чем 3-летним опытом работы в ресторанной сфере, что позволило
          нам глубоко разобраться во всех нюансах обучения и адаптации персонала. Мы разработали
          удобную и современную платформу, которая помогает компаниям быстро и эффективно вводить
          новых сотрудников в работу. Уверены, что автоматизация и доступность знаний – это залог
          качественного обслуживания и лояльных клиентов.
        </p>
      </template>

      <template #footer>
        <p class="text-right italic">Команда MOXAI</p>
      </template>
    </Card>
  </section>
</template>
