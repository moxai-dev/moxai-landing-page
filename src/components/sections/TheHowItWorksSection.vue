<script setup lang="ts">
import AppAnchorLink from '@/components/AppAnchorLink.vue'
import AppHeadingWithEmoji from '@/components/AppHeadingWithEmoji.vue'
import lightBulbEmoji from '@/assets/light-bulb-emoji.png'

import Stepper from 'primevue/stepper'
import StepList from 'primevue/steplist'
import StepPanels from 'primevue/steppanels'
import Step from 'primevue/step'
import StepPanel from 'primevue/steppanel'
import Button from 'primevue/button'
</script>

<template>
  <section class="relative mx-auto max-w-132">
    <AppAnchorLink id="how-it-works" />

    <AppHeadingWithEmoji class="mb-4 -ml-2" :emojiSrc="lightBulbEmoji" emojiAlt="light bulb emoji">
      Как это работает?
    </AppHeadingWithEmoji>

    <h3 class="mb-4">Всего 5 простых шагов</h3>

    <Stepper class="stepper" value="1">
      <StepList>
        <Step value="1"></Step>
        <Step value="2"></Step>
        <Step value="3"></Step>
        <Step value="4"></Step>
        <Step value="5"></Step>
      </StepList>
      <StepPanels>
        <StepPanel #="{ activateCallback }" value="1">
          <div class="mb-4 flex flex-col gap-y-4">
            <h3 class="text-lg font-semibold text-slate-800 dark:text-slate-100">
              Сбор информации
            </h3>
            <p class="min-h-24">
              Мы проанализируем специфику вашей компании, корпоративные стандарты, бизнес-процессы и
              ключевые знания, необходимые для сотрудников.
            </p>
          </div>
          <div class="flex justify-end">
            <Button
              class="touch-none"
              label="Вперед"
              icon="pi pi-arrow-right"
              iconPos="right"
              @click="activateCallback('2')"
            />
          </div>
        </StepPanel>

        <StepPanel #="{ activateCallback }" value="2">
          <div class="mb-4 flex flex-col gap-y-4">
            <h3 class="text-lg font-semibold text-slate-800 dark:text-slate-100">
              Настройка бота и платформы
            </h3>
            <p class="min-h-24">
              Загружаем обучающие материалы, создаём интерактивные модули, тесты и сценарии
              взаимодействия.
            </p>
          </div>
          <div class="flex justify-end gap-x-4">
            <Button
              class="touch-none"
              label="Назад"
              severity="secondary"
              icon="pi pi-arrow-left"
              @click="activateCallback('1')"
            />
            <Button
              class="touch-none"
              label="Вперед"
              icon="pi pi-arrow-right"
              iconPos="right"
              @click="activateCallback('3')"
            />
          </div>
        </StepPanel>

        <StepPanel #="{ activateCallback }" value="3">
          <div class="mb-4 flex flex-col gap-y-4">
            <h3 class="text-lg font-semibold text-slate-800 dark:text-slate-100">
              Запуск и обучение
            </h3>
            <p class="min-h-24">
              Сотрудники получают удобный доступ к Telegram-боту, где могут изучать информацию и
              проходить обучение в комфортном темпе.
            </p>
          </div>
          <div class="flex justify-end gap-x-4">
            <Button
              class="touch-none"
              label="Назад"
              severity="secondary"
              icon="pi pi-arrow-left"
              @click="activateCallback('2')"
            />
            <Button
              class="touch-none"
              label="Вперед"
              icon="pi pi-arrow-right"
              iconPos="right"
              @click="activateCallback('4')"
            />
          </div>
        </StepPanel>

        <StepPanel #="{ activateCallback }" value="4">
          <div class="mb-4 flex flex-col gap-y-4">
            <h3 class="text-lg font-semibold text-slate-800 dark:text-slate-100">
              Контроль знаний
            </h3>
            <p class="min-h-24">
              Система автоматически отслеживает активность сотрудников, фиксирует результаты
              тестирования и формирует отчёты для руководителей.
            </p>
          </div>
          <div class="flex justify-end gap-x-4">
            <Button
              class="touch-none"
              label="Назад"
              severity="secondary"
              icon="pi pi-arrow-left"
              @click="activateCallback('3')"
            />
            <Button
              class="touch-none"
              label="Вперед"
              icon="pi pi-arrow-right"
              iconPos="right"
              @click="activateCallback('5')"
            />
          </div>
        </StepPanel>

        <StepPanel #="{ activateCallback }" value="5">
          <div class="mb-4 flex flex-col gap-y-4">
            <h3 class="text-lg font-semibold text-slate-800 dark:text-slate-100">
              Обратная связь и улучшения
            </h3>
            <p class="min-h-24">
              Мы регулярно обновляем контент, адаптируем систему под ваши задачи и вносим улучшения
              на основе отзывов пользователей.
            </p>
          </div>
          <div class="flex justify-end gap-x-4">
            <Button
              class="touch-none"
              label="Назад"
              severity="secondary"
              icon="pi pi-arrow-left"
              @click="activateCallback('4')"
            />
            <Button
              class="touch-none"
              label="В начало"
              icon="pi pi-arrow-right"
              iconPos="right"
              @click="activateCallback('1')"
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
