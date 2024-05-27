<template>
  <main class="w-full overflow-x-hidden">
    <SiteBanner
      title="Musikanlagen"
      description="Hier findest du bald Musikanlagen"
      image="bg-[url('~/assets/images/speaker-background.webp')]"
    />
    <section class="overflow-hidden"></section>
  </main>
</template>

<script lang="ts" setup>
definePageMeta({
  name: "musikanlagen",
});

useHead({
  title: "RentYourBeat - Musikanlagen",
});
</script>
