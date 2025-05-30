<script setup lang="ts">
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import AppAnchorLink from '@/components/AppAnchorLink.vue'
import functionExample from '@/assets/example-tma-functional.png'
import menuExample from '@/assets/example-tma-menu.png'
import testExample from '@/assets/example-tma-test.png'
import questionExample from '@/assets/example-tma-worker-card.png'
import { AnchorLinkEnum } from '@/enums/AnchorLinkEnum'

enum ExampleTabs {
  Functional,
  Menu,
  Test,
  WorkerCard,
}

interface TabData {
  value: ExampleTabs
  text: string
}

interface TabPanelData extends TabData {
  title: string
  imgSrc: string
}

const tabsData: TabData[] = [
  { value: ExampleTabs.Functional, text: 'Функционал' },
  { value: ExampleTabs.Menu, text: 'Меню' },
  { value: ExampleTabs.Test, text: 'Тесты' },
  { value: ExampleTabs.WorkerCard, text: 'Карточка сотрудника' },
]

const tabPanelsData: TabPanelData[] = [
  {
    value: ExampleTabs.Functional,
    title: 'Пример Telegram-бота для обучения',
    text: 'Быстрый и удобный доступ к необходимой информации и полезным функциям',
    imgSrc: functionExample,
  },
  {
    value: ExampleTabs.Menu,
    title: 'Позиция из меню',
    text: 'Информативная карточка с возможность задать уточняющий вопрос по ней',
    imgSrc: menuExample,
  },
  {
    value: ExampleTabs.Test,
    title: 'Тестирование в реальном времени',
    text: 'Тесты по разделам, с помощью которых можно проверить знания после изучения материала',
    imgSrc: testExample,
  },
  {
    value: ExampleTabs.WorkerCard,
    title: 'Карточки сотрудников',
    text: 'Руководители могут получать основную информацию о работнике. Смотреть на прогресс обучения стажеров и на перспективы повышения более опытных сотрудников',
    imgSrc: questionExample,
  },
]
</script>

<template>
  <section class="relative text-slate-100">
    <div class="mx-auto max-w-132 md:max-w-184 lg:max-w-236 xl:max-w-6xl">
      <!-- bg-gradient-to-r from-emerald-500 to-emerald-600 -->
      <!-- :class="`bg-[url(${gradientBg})]`" -->
      <!-- <img class="absolute top-0 right-0 bottom-0 left-0 -z-10" :src="gradientBg" alt="" /> -->

      <AppAnchorLink class="top-0" :id="AnchorLinkEnum.ExamplesTMA" />

      <h2 class="mb-4 text-center text-2xl font-semibold text-white lg:text-3xl">
        Примеры работы Telegram&nbsp;Mini&nbsp;App
      </h2>

      <Tabs class="tabs" scrollable :value="ExampleTabs.Functional">
        <TabList
          pt:tabList:class="justify-between lg:justify-start lg:gap-x-8"
          pt:nextButton:class="!rounded-full"
          pt:prevButton:class="!rounded-full"
        >
          <Tab
            v-for="tab in tabsData"
            :value="tab.value"
            :key="tab.value"
            pt:root:class="rounded-xl"
          >
            {{ tab.text }}
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel v-for="panel in tabPanelsData" :value="panel.value" :key="panel.value">
            <div class="max-xs:flex-col relative flex justify-between gap-x-4 gap-y-3">
              <div class="max-xs:contents md:mt-10">
                <h3 class="mb-3 text-xl font-semibold text-white lg:text-2xl">
                  {{ panel.title }}
                </h3>
                <p class="max-xs:order-1 lg:text-lg">
                  {{ panel.text }}
                </p>
              </div>

              <div class="relative shrink-0">
                <img class="relative z-10 h-100 md:h-132" :src="panel.imgSrc" alt="фото примера" />
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  </section>
</template>

<style scoped>
.tabs {
  --p-tabs-tablist-background: transparent;
  --p-tabs-tabpanel-background: transparent;

  --p-tabs-tab-color: var(--color-neutral-500);
  --p-tabs-tab-active-color: var(--color-slate-100);
  --p-tabs-tabpanel-color: var(--color-slate-100);
  --p-tabs-tab-active-background: color-mix(in oklab, var(--color-white) 20%, transparent);

  --p-tabs-active-bar-background: transparent;
  --p-tabs-tablist-border-width: 0;
  --p-tabs-tab-border-width: 0;

  --p-tabs-tab-padding: calc(var(--spacing) * 2) calc(var(--spacing) * 4);
  --p-tabs-tabpanel-padding: calc(var(--spacing) * 4) 0 0 0;

  --p-tabs-nav-button-background: rgba(0, 0, 0, 0.4);
  --p-tabs-nav-button-shadow: transparent;
  --p-tabs-nav-button-color: var(--color-slate-100);
}
</style>
