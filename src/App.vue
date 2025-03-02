<script setup lang="ts">
import TheHeader from '@/components/sections/TheHeader.vue'
import TheHeroSection from '@/components/sections/TheHeroSection.vue'
import TheProblemSection from '@/components/sections/TheProblemSection.vue'
import TheSolutionSection from '@/components/sections/TheSolutionSection.vue'
import TheHowItWorksSection from '@/components/sections/TheHowItWorksSection.vue'
import TheExamplesSection from '@/components/sections/TheExamplesSection.vue'
import TheFooter from '@/components/sections/TheFooter.vue'
</script>

<template>
  <TheHeader class="mb-16 px-3" />
  <main>
    <TheHeroSection class="mb-16 px-3" />
    <TheProblemSection class="mb-16 px-3" />
    <TheSolutionSection class="mb-16 px-3" />
    <TheHowItWorksSection class="mb-16 px-3" />
    <TheExamplesSection class="px-3 py-6" />
  </main>
  <TheFooter />
</template>
