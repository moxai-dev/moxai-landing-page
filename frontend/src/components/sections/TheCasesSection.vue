<script setup lang="ts">
import AppAnchorLink from '@/components/AppAnchorLink.vue'
import AppHeadingWithEmoji from '@/components/AppHeadingWithEmoji.vue'
import goldMedalEmoji from '@/assets/gold-medal.png'
import hivLogo from '@/assets/hiv-logo.jpg'
import finchLogo from '@/assets/finch-logo.png'
import { AnchorLinkEnum } from '@/enums/AnchorLinkEnum'
</script>

<template>
  <section class="relative mx-auto max-w-132 md:max-w-184 lg:max-w-236 xl:max-w-6xl">
    <AppAnchorLink :id="AnchorLinkEnum.Cases" />

    <AppHeadingWithEmoji
      class="mb-6 md:mb-8"
      :emojiSrc="goldMedalEmoji"
      emojiAlt="gold medal emoji"
    >
      Кейсы
    </AppHeadingWithEmoji>

    <!-- <p class="relative mb-4 pl-15 text-xl md:mb-8">
      <QuoteIcon
        class="absolute -top-4 left-0 size-12 opacity-20 dark:text-slate-100 dark:opacity-100"
      />
      После внедрения системы
      <span class="font-semibold text-slate-800 dark:text-slate-100">
        время адаптации новичков сократилось на 30%</span
      >, а у наставников появилась возможность уделять больше времени гостям. Благодаря удобному
      Telegram-боту, сотрудники могут оперативно находить нужную информацию, повышая качество
      обслуживания гостей.
    </p> -->

    <div class="flex flex-col gap-y-8">
      <div class="flex items-center gap-x-2">
        <img class="size-12 rounded-full" :src="hivLogo" alt="логотип Хачапури и Вино" />
        <p class="text-lg font-semibold">Сеть ресторанов Хачапури и Вино</p>
      </div>
      <div class="flex items-center gap-x-2">
        <img class="size-12 rounded-full" :src="finchLogo" alt="логотип Finch" />
        <p class="text-lg font-semibold">Сеть кофеен «Finch»</p>
      </div>
    </div>
  </section>
</template>
