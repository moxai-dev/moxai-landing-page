<script setup lang="ts">
import { ref, watch } from 'vue'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Message from 'primevue/message'
import Button from 'primevue/button'
import Toast from 'primevue/toast'
import AppAnchorLink from '@/components/AppAnchorLink.vue'
import { useToast } from 'primevue/usetoast'
import { AnchorLinkEnum } from '@/enums/AnchorLinkEnum'

const name = ref('')
const contact = ref('')
const additionalInfo = ref('')

const isNameEmpty = ref(false)
const isContactEmpty = ref(false)

watch(name, (newVal) => {
  if (newVal.length) {
    isNameEmpty.value = false
  } else {
    isNameEmpty.value = true
  }
})

watch(contact, (newVal) => {
  if (newVal.length) {
    isContactEmpty.value = false
  } else {
    isContactEmpty.value = true
  }
})

const toast = useToast()
const showSuccess = () => {
  toast.add({
    severity: 'success',
    summary: 'Успех!',
    detail: 'Ваша заявка была отправлена',
    life: 5000,
  })
}
const showError = () => {
  toast.add({
    severity: 'error',
    summary: 'Ой!',
    detail: 'Не смогли отправить вашу заявку. Проверьте интернет или попробуйте позже',
    life: 5000,
  })
}

const clearOnSuccess = () => {
  name.value = ''
  contact.value = ''
  additionalInfo.value = ''

  // выполнить эффект watch сначала и потом убрать сообщение об ошибке
  // выглядит не очень, можно переписать логику
  setTimeout(() => {
    isNameEmpty.value = false
    isContactEmpty.value = false
  })
}

const sendForm = async () => {
  if (name.value.length == 0) {
    isNameEmpty.value = true
  }

  if (contact.value.length == 0) {
    isContactEmpty.value = true
  }

  if (isContactEmpty.value || isNameEmpty.value) {
    return
  }

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        contact: contact.value,
        additionalInfo: additionalInfo.value,
      }),
    })

    if (!response.ok) {
      throw new Error('Ошибка при отправке запроса')
    }

    await response.json()
    showSuccess()
    clearOnSuccess()
  } catch (error) {
    showError()
  }
}
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

      <form @submit.prevent="sendForm" class="form mx-auto mb-2 flex max-w-184 flex-col gap-y-8">
        <div class="relative flex max-w-5/6 flex-col gap-y-1 md:w-3/5">
          <label for="form-name" class="font-bold">Ваше имя *</label>
          <InputText v-model="name" id="form-name" class="rounded-sm" />
          <Message v-if="isNameEmpty" severity="error" variant="simple" class="absolute -bottom-6">
            Заполните поле
          </Message>
        </div>

        <div class="relative flex max-w-5/6 flex-col gap-y-1 md:w-3/5">
          <label for="form-contact" class="font-bold"
            >Контакт (номер, почта, ник в соцсети) *</label
          >
          <InputText v-model="contact" id="form-contact" class="rounded-sm" />
          <Message
            v-if="isContactEmpty"
            severity="error"
            variant="simple"
            class="absolute -bottom-6"
          >
            Заполните поле
          </Message>
        </div>

        <div class="flex flex-col gap-y-1">
          <p class="font-bold">Здесь можете задать вопросы или рассказать о своей компании</p>
          <Textarea v-model="additionalInfo" class="min-h-42 resize-none rounded-sm" />
        </div>

        <Button label="Оставить заявку" severity="contrast" type="submit" />
      </form>
    </div>
    <Toast pt:root:class="!w-88" />
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

  --p-message-error-simple-color: var(--color-red-800);
}
</style>
