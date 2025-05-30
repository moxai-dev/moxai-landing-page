<script setup lang="ts">
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import AppAnchorLink from '@/components/AppAnchorLink.vue'
import iphoneFrame from '@/assets/iphone-frame.png'
import functionExample from '@/assets/example-bot-functions.mp4'
import menuExample from '@/assets/example-bot-menu.mp4'
import questionExample from '@/assets/example-bot-question.mp4'
import testExample from '@/assets/example-bot-test.mp4'
import aiExample from '@/assets/example-bot-AI.mp4'
import { AnchorLinkEnum } from '@/enums/AnchorLinkEnum'

enum ExampleTabs {
  Functional,
  Menu,
  Question,
  Test,
  AI,
}

interface TabData {
  value: ExampleTabs
  text: string
}

interface TabPanelData extends TabData {
  title: string
  videoSrc: string
}

const tabsData: TabData[] = [
  { value: ExampleTabs.Functional, text: 'Функционал' },
  { value: ExampleTabs.Menu, text: 'Меню' },
  { value: ExampleTabs.Question, text: 'Вопросы' },
  { value: ExampleTabs.Test, text: 'Тесты' },
  { value: ExampleTabs.AI, text: 'ИИ' },
]

const tabPanelsData: TabPanelData[] = [
  {
    value: ExampleTabs.Functional,
    title: 'Пример Telegram-бота для обучения',
    text: 'Быстрый и удобный доступ к необходимой информации и полезным функциям',
    videoSrc: functionExample,
  },
  {
    value: ExampleTabs.Menu,
    title: 'Позиция из меню',
    text: 'Информативная карточка с возможность задать уточняющий вопрос по ней',
    videoSrc: menuExample,
  },
  {
    value: ExampleTabs.Question,
    title: 'Ответы на частые вопросы',
    text: 'Как правильно подать блюдо или оформить заказ — всё в одном чате',
    videoSrc: questionExample,
  },
  {
    value: ExampleTabs.Test,
    title: 'Тестирование в реальном времени',
    text: 'Тесты по разделам, с помощью которых можно проверить знания после изучения материала',
    videoSrc: testExample,
  },
  {
    value: ExampleTabs.AI,
    title: 'Подсказки от AI',
    text: 'Если что-то непонятно, бот, обученный на данных ресторана, уточняет контекст и даёт развёрнутый ответ',
    videoSrc: aiExample,
  },
]
</script>

<template>
  <section class="relative text-slate-100">
    <div class="mx-auto max-w-132 md:max-w-184 lg:max-w-236 xl:max-w-6xl">
      <!-- bg-gradient-to-r from-emerald-500 to-emerald-600 -->
      <!-- :class="`bg-[url(${gradientBg})]`" -->
      <!-- <img class="absolute top-0 right-0 bottom-0 left-0 -z-10" :src="gradientBg" alt="" /> -->

      <AppAnchorLink class="top-0" :id="AnchorLinkEnum.ExamplesBot" />

      <h2 class="mb-4 text-center text-2xl font-semibold text-white lg:text-3xl">
        Примеры работы Telegram&nbsp;бота
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
                <img class="relative z-10 h-100 md:h-132" :src="iphoneFrame" alt="" />
                <video
                  class="absolute top-[26px] left-[10px] h-[352px] md:top-[35px] md:left-[13px] md:h-[464px]"
                  autoplay
                  loop
                  playsinline
                  muted
                  :src="panel.videoSrc"
                ></video>
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
