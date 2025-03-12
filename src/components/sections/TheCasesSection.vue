<script setup lang="ts">
import AppAnchorLink from '@/components/AppAnchorLink.vue'
import AppHeadingWithEmoji from '@/components/AppHeadingWithEmoji.vue'
import goldMedalEmoji from '@/assets/gold-medal.png'
import hivLogo from '@/assets/hiv-logo.jpg'
import QuoteIcon from '@/components/icons/QuoteIcon.vue'
</script>

<template>
  <section class="relative mx-auto max-w-132">
    <AppAnchorLink id="cases" />

    <AppHeadingWithEmoji class="mb-6" :emojiSrc="goldMedalEmoji" emojiAlt="gold medal emoji">
      Кейсы
    </AppHeadingWithEmoji>

    <p class="relative mb-4 pl-15 text-xl">
      <QuoteIcon class="absolute -top-4 left-0 size-12 opacity-20" />
      После внедрения системы
      <span class="font-semibold">время адаптации новичков сократилось на 30%</span>, а у
      наставников появилась возможность уделять больше времени гостям. Благодаря удобному
      Telegram-боту, сотрудники могут оперативно находить нужную информацию, повышая качество
      обслуживания гостей.
    </p>

    <div class="flex items-center gap-x-2">
      <img class="size-12 rounded-full" :src="hivLogo" alt="логотип Хачапури и Вино" />
      <p class="text-lg font-semibold">Сеть ресторанов «Хачапури и Вино»</p>
    </div>
  </section>
</template>
