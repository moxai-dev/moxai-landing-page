<script setup lang="ts">
import AppAnchorLink from '@/components/AppAnchorLink.vue'
</script>

<template>
  <section
    class="relative mx-auto h-180 max-w-132 bg-linear-65 from-emerald-500 from-40% to-lime-500 text-slate-100"
  >
    <!-- bg-gradient-to-r from-emerald-500 to-emerald-600 -->
    <!-- :class="`bg-[url(${gradientBg})]`" -->
    <!-- <img class="absolute top-0 right-0 bottom-0 left-0 -z-10" :src="gradientBg" alt="" /> -->

    <AppAnchorLink class="top-0" id="contact-form" />

    <h2 class="mb-4 text-center text-2xl font-semibold text-white">
      Готовы выйти на новый уровень обучения персонала?
    </h2>

    <form action="" class="mb-2">
      <p>ник в тг</p>
      <input class="mb-2 border-2 bg-white" type="text" />
      <p>какие-то пожелания</p>
      <textarea class="h-50 resize-y bg-white"></textarea>
    </form>

    <button class="border-2">отправить форму</button>
  </section>
</template>
