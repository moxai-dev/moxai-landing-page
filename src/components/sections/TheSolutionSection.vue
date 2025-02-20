<script setup lang="ts">
import AppAnchorLink from '@/components/AppAnchorLink.vue'
import AppHeadingWithEmoji from '@/components/AppHeadingWithEmoji.vue'
import clipboardEmoji from '@/assets/clipboard-emoji.png'
</script>

<template>
  <section class="relative">
    <AppAnchorLink id="solution" />

    <AppHeadingWithEmoji class="mb-6" :emojiSrc="clipboardEmoji" emojiAlt="clipboard emoji">
      Наше решение для вашей проблемы
    </AppHeadingWithEmoji>

    <h3 class="mb-6">Предлагаем платформу для обучения в Телеграм-боте</h3>

    <p class="mb-6">
      <span class="font-semibold">Полная адаптация:</span>
      Все стандарты ресторана, меню, регламенты и видеоуроки - в одном месте
    </p>

    <p class="mb-6">
      <span class="font-semibold">Автоматизация тестирования:</span>
      Подстраиваемся под специфику вашего заведения (меню, стандарты, стилистика)
    </p>

    <p class="mb-6">
      <span class="font-semibold">Автоматизация тестирования:</span>
      Удобные тесты и квизы, чтобы убедиться в понимании ключевых моментов сотрудниками
    </p>

    <p class="mb-6">
      <span class="font-semibold">AI-помощник 24/7:</span>
      ИИ отвечает на вопросы стажёров в реальном времени, разгружая менеджеров и опытных сотрудников
    </p>

    <p class="mb-6">
      <span class="font-semibold">Лёгкая интеграция:</span>
      Готовое решение для обучения в Telegram удобно, привычно, доступно.
    </p>

    <p>
      Telegram – это платформа, к которой у большинства сотрудников уже есть доступ. Не нужно
      устанавливать дополнительные приложения или осваивать сложные интерфейсы – обучение проходит
      прямо в привычном мессенджере, доступном на любом устройстве в любое время.
    </p>
  </section>
</template>
