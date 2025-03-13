<script setup lang="ts">
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'
import AppAnchorLink from '@/components/AppAnchorLink.vue'
import { ref } from 'vue'

const name = ref()
const contact = ref()
const additionalInfo = ref()
</script>

<template>
  <section
    class="relative mx-auto max-w-132 bg-linear-65 from-emerald-500 from-40% to-lime-500 pb-20 text-slate-100"
  >
    <!-- bg-gradient-to-r from-emerald-500 to-emerald-600 -->
    <!-- :class="`bg-[url(${gradientBg})]`" -->
    <!-- <img class="absolute top-0 right-0 bottom-0 left-0 -z-10" :src="gradientBg" alt="" /> -->

    <AppAnchorLink class="top-0" id="contact-form" />

    <h2 class="mb-4 text-center text-2xl font-semibold text-white">
      Готовы выйти на новый уровень обучения персонала?
    </h2>

    <form action="" class="form mb-2 flex flex-col gap-y-8">
      <div class="flex max-w-5/6 flex-col gap-y-1">
        <label for="form-name" class="font-bold">Ваше имя *</label>
        <InputText v-model="name" id="form-name" />
      </div>

      <div class="flex max-w-5/6 flex-col gap-y-1">
        <label for="form-contact" class="font-bold">Контакт (номер, почта, ник в соцсети) *</label>
        <InputText v-model="contact" id="form-contact" />
      </div>

      <div class="flex flex-col gap-y-1">
        <p class="font-bold">Здесь можете задать вопросы или рассказать о своей компании</p>
        <Textarea v-model="additionalInfo" class="min-h-42 resize-none" />
      </div>

      <Button label="Оставить заявку" severity="contrast" type="submit" />
    </form>
  </section>
</template>

<style scoped>
.form {
  --p-inputtext-border-color: var(--color-neutral-700);
  --p-textarea-border-color: var(--color-neutral-700);
  --p-button-contrast-background: var(--color-black);
}
</style>
