<script setup lang="ts">
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'
import AppAnchorLink from '@/components/AppAnchorLink.vue'
import { AnchorLinkEnum } from '@/enums/AnchorLinkEnum'

const name = ref()
const contact = ref()
const additionalInfo = ref()
</script>

<template>
  <section class="relative bg-linear-65 from-emerald-500 from-40% to-lime-500 pb-20 text-slate-100">
    <div class="mx-auto max-w-132 md:max-w-184 lg:max-w-236 xl:max-w-6xl">
      <!-- bg-gradient-to-r from-emerald-500 to-emerald-600 -->
      <!-- :class="`bg-[url(${gradientBg})]`" -->
      <!-- <img class="absolute top-0 right-0 bottom-0 left-0 -z-10" :src="gradientBg" alt="" /> -->

      <AppAnchorLink class="top-0" :id="AnchorLinkEnum.ContactForm" />

      <h2 class="mb-4 text-center text-2xl font-semibold text-white lg:text-3xl">
        Готовы выйти на новый уровень обучения персонала?
      </h2>

      <form action="" class="form mx-auto mb-2 flex max-w-184 flex-col gap-y-8">
        <div class="flex max-w-5/6 flex-col gap-y-1 md:w-3/5">
          <label for="form-name" class="font-bold">Ваше имя *</label>
          <InputText v-model="name" id="form-name" class="rounded-sm" />
        </div>

        <div class="flex max-w-5/6 flex-col gap-y-1 md:w-3/5">
          <label for="form-contact" class="font-bold"
            >Контакт (номер, почта, ник в соцсети) *</label
          >
          <InputText v-model="contact" id="form-contact" class="rounded-sm" />
        </div>

        <div class="flex flex-col gap-y-1">
          <p class="font-bold">Здесь можете задать вопросы или рассказать о своей компании</p>
          <Textarea v-model="additionalInfo" class="min-h-42 resize-none rounded-sm" />
        </div>

        <Button label="Оставить заявку" severity="contrast" type="submit" />
      </form>
    </div>
  </section>
</template>

<style scoped>
.form {
  --p-inputtext-border-color: var(--color-neutral-700);
  --p-inputtext-color: var(--color-slate-700);
  --p-inputtext-background: var(--color-white);

  --p-textarea-border-color: var(--color-neutral-700);
  --p-textarea-color: var(--color-slate-700);
  --p-textarea-background: var(--color-white);

  --p-button-contrast-background: var(--color-black);
  --p-button-contrast-border-color: var(--color-neutral-900);
  --p-button-contrast-color: var(--color-slate-100);
}
</style>
