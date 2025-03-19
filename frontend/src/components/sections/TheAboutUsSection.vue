<script setup lang="ts">
import Card from 'primevue/card'
import AppAnchorLink from '@/components/AppAnchorLink.vue'
import AppHeadingWithEmoji from '@/components/AppHeadingWithEmoji.vue'
import magnifyingGlassEmoji from '@/assets/magnifying-glass-tilted-right.png'
import { AnchorLinkEnum } from '@/enums/AnchorLinkEnum'
</script>

<template>
  <section class="relative mx-auto max-w-132 md:max-w-184 lg:max-w-236 xl:max-w-6xl">
    <AppAnchorLink :id="AnchorLinkEnum.AboutUs" />

    <AppHeadingWithEmoji
      class="mb-6"
      :emojiSrc="magnifyingGlassEmoji"
      emojiAlt="magnifying glass emoji"
    >
      О нас
    </AppHeadingWithEmoji>

    <Card class="card">
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

<style scoped>
.dark .card {
  --p-card-background: var(--color-neutral-800);
}
</style>
