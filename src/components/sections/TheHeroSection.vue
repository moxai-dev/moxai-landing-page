<script setup lang="ts">
// import rocketEmoji from '@/assets/rocket-emoji.png'
</script>

<template>
  <section class="font-inter relative text-slate-700">
    <!-- <img class="absolute -top-4 right-px -z-10 h-40" :src="rocketEmoji" alt="" /> -->
    <h1 class="mx-auto mb-4 max-w-100 text-center text-3xl font-semibold text-slate-800">
      <span class="bg-gradient-to-r from-emerald-500 to-sky-600 bg-clip-text text-transparent">
        Ускоряем и упрощаем
      </span>
      <span>обучение персонала</span>
    </h1>

    <p class="mx-auto mb-6 max-w-96 text-center">
      Инновационное решение на основе искусственного интеллекта, позволяющее новым сотрудникам
      быстро адаптироваться и эффективно осваивать все стандарты компании
    </p>

    <div class="flex items-center justify-center gap-x-6">
      <a
        class="flex items-center gap-x-2 rounded-md bg-emerald-500 px-3 py-2 text-white focus:ring-2 focus:ring-emerald-900 focus:outline-none"
        href="#problem"
      >
        Ознакомиться
        <i class="pi pi-arrow-down"></i>
      </a>
      <button
        class="border-gradient cursor-pointer rounded-md px-3 py-2 text-slate-800 focus:ring-2 focus:ring-emerald-600 focus:outline-none"
        type="button"
        aria-label="Запросить демо"
      >
        Запросить демо
      </button>
    </div>
  </section>
</template>
