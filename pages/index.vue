<script setup lang="ts">
useHead({
  title: "Мавка",
});
</script>

<template>
  <main class="container">
    <UiNavbar />
    <UiHero />
    <UiFeatures />
  </main>
  <UiAtom />
  <main class="container">
    <UiFooter />
  </main>
</template>
