<script setup lang="ts">
import TheHeader from '@/components/sections/TheHeader.vue'
import TheHeroSection from '@/components/sections/TheHeroSection.vue'
import TheProblemSection from '@/components/sections/TheProblemsSection.vue'
import TheSolutionSection from '@/components/sections/TheSolutionSection.vue'
import TheHowItWorksSection from '@/components/sections/TheHowItWorksSection.vue'
import TheExamplesBotSection from '@/components/sections/TheExamplesBotSection.vue'
import TheExamplesTMASection from '@/components/sections/TheExamplesTMASection.vue'
import TheAdvantagesSection from '@/components/sections/TheAdvantagesSection.vue'
import TheCasesSection from '@/components/sections/TheCasesSection.vue'
import TheAboutUsSection from '@/components/sections/TheAboutUsSection.vue'
import TheContactForm from '@/components/sections/TheContactForm.vue'
import TheFooter from '@/components/sections/TheFooter.vue'
</script>

<template>
  <TheHeader class="mb-16 px-3 lg:mb-20 xl:mb-24" />
  <main>
    <TheHeroSection class="mb-16 px-3 lg:mb-20 xl:mb-24" />
    <TheProblemSection class="mb-16 px-3 lg:mb-20 xl:mb-24" />
    <TheSolutionSection class="mb-16 px-3 lg:mb-20 xl:mb-24" />
    <TheHowItWorksSection class="mb-16 px-3 lg:mb-20 xl:mb-24" />
    <div class="bg-linear-65 from-emerald-500 from-40% to-lime-500 px-3 py-8">
      <TheExamplesTMASection class="mb-16 lg:mb-20 xl:mb-24" />
      <TheExamplesBotSection />
    </div>
    <TheAdvantagesSection class="mt-10 mb-16 px-3 lg:mt-14 lg:mb-20 xl:mt-18 xl:mb-24" />
    <TheCasesSection class="mb-16 px-3 lg:mb-20 xl:mb-24" />
    <TheAboutUsSection class="mb-16 px-3 lg:mb-20 xl:mb-24" />
    <TheContactForm class="px-3 py-6" />
  </main>
  <TheFooter />
</template>
