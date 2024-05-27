<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  meta: [
    {
      name: "theme-color",
      content: "#f69013",
    },
  ],
});

useSeoMeta({
  title: "RentYourBeat",
  ogTitle: "RentYourBeat",
  description:
    "Miete Eventtechnik für deine Feier ganz einfach online. Keine Anrufe, keine E-Mails – alles über unser Dashboard. Also, worauf wartest du? Lass die Party steigen!",
  ogDescription: "Miete Eventtechnik für deine Feier ganz einfach online.",
});
</script>

<style>
body {
  margin: 0;

  * {
    outline: none;
  }
}
</style>
