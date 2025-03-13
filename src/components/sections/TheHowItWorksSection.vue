<script setup lang="ts">
import Stepper from 'primevue/stepper'
import StepList from 'primevue/steplist'
import Step from 'primevue/step'
import StepPanels from 'primevue/steppanels'
import StepPanel from 'primevue/steppanel'
import Button from 'primevue/button'
import AppAnchorLink from '@/components/AppAnchorLink.vue'
import AppHeadingWithEmoji from '@/components/AppHeadingWithEmoji.vue'
import lightBulbEmoji from '@/assets/light-bulb-emoji.png'
import { AnchorLinkEnum } from '@/enums/AnchorLinkEnum'

enum HowItWorksStepper {
  Information = 1,
  Settings,
  Launch,
  Testing,
  Feedback,
}

interface StepData {
  value: HowItWorksStepper
}

interface StepPanelData extends StepData {
  title: string
  text: string
}

const stepsData: StepData[] = [
  { value: HowItWorksStepper.Information },
  { value: HowItWorksStepper.Settings },
  { value: HowItWorksStepper.Launch },
  { value: HowItWorksStepper.Testing },
  { value: HowItWorksStepper.Feedback },
]

const stepPanelsData: StepPanelData[] = [
  {
    value: HowItWorksStepper.Information,
    title: 'Сбор информации',
    text: 'Мы проанализируем специфику вашей компании, корпоративные стандарты, бизнес-процессы и ключевые знания, необходимые для сотрудников',
  },
  {
    value: HowItWorksStepper.Settings,
    title: 'Настройка бота и платформы',
    text: 'Загружаем обучающие материалы, создаём интерактивные модули, тесты и сценарии взаимодействия',
  },
  {
    value: HowItWorksStepper.Launch,
    title: 'Запуск и обучение',
    text: 'Сотрудники получают удобный доступ к Telegram-боту, где могут изучать информацию и проходить обучение в комфортном темпе',
  },
  {
    value: HowItWorksStepper.Testing,
    title: 'Контроль знаний',
    text: 'Система автоматически отслеживает активность сотрудников, фиксирует результаты тестирования и формирует отчёты для руководителей',
  },
  {
    value: HowItWorksStepper.Feedback,
    title: 'Обратная связь и улучшения',
    text: 'Мы регулярно обновляем контент, адаптируем систему под ваши задачи и вносим улучшения на основе отзывов пользователей',
  },
]
</script>

<template>
  <section class="relative mx-auto max-w-132">
    <AppAnchorLink :id="AnchorLinkEnum.HowItWorks" />

    <AppHeadingWithEmoji class="mb-4 -ml-2" :emojiSrc="lightBulbEmoji" emojiAlt="light bulb emoji">
      Как это работает?
    </AppHeadingWithEmoji>

    <h3 class="mb-4">Всего 5 простых шагов</h3>

    <Stepper class="stepper" :value="HowItWorksStepper.Information">
      <StepList>
        <Step v-for="step in stepsData" :value="step.value"></Step>
      </StepList>

      <StepPanels>
        <StepPanel
          v-for="(panel, index) in stepPanelsData"
          #="{ activateCallback }"
          :value="panel.value"
          :key="panel.value"
        >
          <div class="mb-4 flex flex-col gap-y-4">
            <h3 class="text-lg font-semibold text-slate-800 dark:text-slate-100">
              {{ panel.title }}
            </h3>
            <p class="min-h-24">{{ panel.text }}</p>
          </div>

          <div class="flex justify-end gap-x-4">
            <Button
              v-if="index != 0"
              class="touch-none"
              label="Назад"
              severity="secondary"
              icon="pi pi-arrow-left"
              @click="activateCallback(panel.value - 1)"
            />
            <Button
              class="touch-none"
              :label="index != stepPanelsData.length - 1 ? 'Вперед' : 'В начало'"
              icon="pi pi-arrow-right"
              iconPos="right"
              @click="activateCallback(index != stepPanelsData.length - 1 ? panel.value + 1 : 1)"
            />
          </div>
        </StepPanel>
      </StepPanels>
    </Stepper>
  </section>
</template>

<style scoped>
.stepper {
  --p-stepper-steppanel-background: transparent;
  --p-stepper-steppanel-color: var(--color-slate-700);
  --p-stepper-steppanels-padding: calc(var(--spacing) * 4) 0 0 0;
}

.dark .stepper {
  --p-stepper-steppanel-color: var(--color-slate-200);
}
</style>
