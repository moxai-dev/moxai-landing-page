<script setup lang="ts">
import AppAnchorLink from '@/components/AppAnchorLink.vue'
import iphoneFrame from '@/assets/iphone-frame.png'
import menuExample from '@/assets/menu-example.mp4'

import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'

enum ExampleTabs {
  Functional,
  Menu,
  Question,
  Test,
  AI,
}
</script>

<template>
  <section
    class="relative mx-auto max-w-132 bg-linear-65 from-emerald-500 from-40% to-lime-500 text-slate-100"
  >
    <!-- bg-gradient-to-r from-emerald-500 to-emerald-600 -->
    <!-- :class="`bg-[url(${gradientBg})]`" -->
    <!-- <img class="absolute top-0 right-0 bottom-0 left-0 -z-10" :src="gradientBg" alt="" /> -->

    <AppAnchorLink class="top-0" id="examples" />

    <h2 class="mb-4 text-center text-2xl font-semibold text-white">Примеры работы</h2>

    <Tabs class="tabs" scrollable :value="ExampleTabs.Functional">
      <TabList
        pt:tabList:class="justify-between "
        pt:nextButton:class="!rounded-full"
        pt:prevButton:class="!rounded-full"
      >
        <Tab :value="ExampleTabs.Functional" pt:root:class="rounded-xl">Функционал</Tab>
        <Tab :value="ExampleTabs.Menu" pt:root:class="rounded-xl">Меню</Tab>
        <Tab :value="ExampleTabs.Question" pt:root:class="rounded-xl">Вопросы</Tab>
        <Tab :value="ExampleTabs.Test" pt:root:class="rounded-xl">Тесты</Tab>
        <Tab :value="ExampleTabs.AI" pt:root:class="rounded-xl">ИИ</Tab>
      </TabList>

      <TabPanels>
        <TabPanel :value="ExampleTabs.Functional">
          <div class="max-xs:flex-col relative flex gap-x-4 gap-y-3">
            <div class="max-xs:contents">
              <h3 class="mb-3 text-xl font-semibold text-white">
                Пример Telegram-бота для обучения
              </h3>
              <p class="max-xs:order-1">
                Быстрый и удобный доступ к необходимой информации и полезным функциям.
              </p>
            </div>

            <div class="relative shrink-0">
              <img class="max-xs:w-52 xs:h-100 relative z-10" :src="iphoneFrame" alt="" />
              <video
                class="xs:h-[352px] absolute top-[26px] left-[10px] h-[372px]"
                autoplay
                loop
                playsinline
                muted
                :src="menuExample"
              ></video>
            </div>
          </div>
        </TabPanel>

        <TabPanel :value="ExampleTabs.Menu">
          <div class="max-xs:flex-col relative flex gap-x-4 gap-y-3">
            <div class="max-xs:contents">
              <h3 class="mb-3 text-xl font-semibold text-white">Позиция из меню</h3>
              <p class="max-xs:order-1">
                Информативная карточка с возможность задать уточняющий вопрос по ней
              </p>
            </div>

            <div class="relative shrink-0">
              <img class="max-xs:w-52 xs:h-100 relative z-10" :src="iphoneFrame" alt="" />
              <video
                class="xs:h-[352px] absolute top-[26px] left-[10px] h-[372px]"
                autoplay
                loop
                playsinline
                muted
                :src="menuExample"
              ></video>
            </div>
          </div>
        </TabPanel>

        <TabPanel :value="ExampleTabs.Question">
          <div class="max-xs:flex-col relative flex gap-x-4 gap-y-3">
            <div class="max-xs:contents">
              <h3 class="mb-3 text-xl font-semibold text-white">Ответы на частые вопросы</h3>
              <p class="max-xs:order-1">
                Как правильно подать блюдо или оформить заказ — всё в одном чате
              </p>
            </div>

            <div class="relative shrink-0">
              <img class="max-xs:w-52 xs:h-100 relative z-10" :src="iphoneFrame" alt="" />
              <video
                class="xs:h-[352px] absolute top-[26px] left-[10px] h-[372px]"
                autoplay
                loop
                playsinline
                muted
                :src="menuExample"
              ></video>
            </div>
          </div>
        </TabPanel>

        <TabPanel :value="ExampleTabs.Test">
          <div class="max-xs:flex-col relative flex gap-x-4 gap-y-3">
            <div class="max-xs:contents">
              <h3 class="mb-3 text-xl font-semibold text-white">Тестирование в реальном времени</h3>
              <p class="max-xs:order-1">
                Тесты по разделам, с помощью которых можно проверить знания после изучения
                материала.
              </p>
            </div>

            <div class="relative shrink-0">
              <img class="max-xs:w-52 xs:h-100 relative z-10" :src="iphoneFrame" alt="" />
              <video
                class="xs:h-[352px] absolute top-[26px] left-[10px] h-[372px]"
                autoplay
                loop
                playsinline
                muted
                :src="menuExample"
              ></video>
            </div>
          </div>
        </TabPanel>

        <TabPanel :value="ExampleTabs.AI">
          <div class="max-xs:flex-col relative flex gap-x-4 gap-y-3">
            <div class="max-xs:contents">
              <h3 class="mb-3 text-xl font-semibold text-white">Подсказки от AI</h3>
              <p class="max-xs:order-1">
                Если что-то непонятно, бот, обученный на данных ресторана, уточняет контекст и даёт
                развёрнутый ответ.
              </p>
            </div>

            <div class="relative shrink-0">
              <img class="max-xs:w-52 xs:h-100 relative z-10" :src="iphoneFrame" alt="" />
              <video
                class="xs:h-[352px] absolute top-[26px] left-[10px] h-[372px]"
                autoplay
                loop
                playsinline
                muted
                :src="menuExample"
              ></video>
            </div>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
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
