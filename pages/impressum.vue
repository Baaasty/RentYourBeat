<template>
  <main class="w-full overflow-x-hidden">
    <SiteBanner title="Impressum" description="" />
    <section class="overflow-hidden"></section>
  </main>
</template>

<script lang="ts" setup>
definePageMeta({
  name: "impressum",
  auth: false,
});

useHead({
  title: "RentYourBeat - Impressum",
});
</script>
