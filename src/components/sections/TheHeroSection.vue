<script setup lang="ts">
import { AnchorLinkEnum } from '@/enums/AnchorLinkEnum'
</script>

<template>
  <section>
    <!-- <img class="absolute -top-4 right-px -z-10 h-40" :src="rocketEmoji" alt="" /> -->
    <div class="mx-auto max-w-96 text-center">
      <h1 class="mb-4 text-3xl font-semibold text-slate-800 dark:text-slate-100">
        <span
          class="bg-gradient-to-r from-emerald-500 to-sky-600 bg-clip-text text-transparent dark:from-emerald-300 dark:to-sky-400"
        >
          Ускоряем и упрощаем
        </span>
        <span>обучение персонала</span>
      </h1>

      <p class="mb-6">
        Инновационное решение на основе искусственного интеллекта, позволяющее новым сотрудникам
        быстро адаптироваться и эффективно осваивать все стандарты компании
      </p>
    </div>

    <div class="flex flex-wrap-reverse items-center justify-center gap-x-6 gap-y-4">
      <a
        class="flex items-center gap-x-2 rounded-md bg-emerald-500 px-3 py-2 text-white focus:ring-2 focus:ring-emerald-900 focus:outline-none dark:bg-emerald-400 dark:text-zinc-900"
        :href="'#' + AnchorLinkEnum.Problem"
      >
        Ознакомиться
        <i class="pi pi-arrow-down"></i>
      </a>
      <a
        class="border-gradient rounded-md px-3 py-2 text-slate-800 focus:ring-2 focus:ring-emerald-600 focus:outline-none dark:text-slate-100"
        :href="'#' + AnchorLinkEnum.ContactForm"
      >
        Запросить демо
      </a>
    </div>
  </section>
</template>
