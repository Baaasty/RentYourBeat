<template>
  <section class="hidden w-[350px] flex-col gap-4 text-white lg:flex">
    <h2 class="text-3xl font-bold">
      Willkommen zurück <br />
      Schön, dass du da bist!
    </h2>
    <p class="italic">- Dein RentYourBeat-Team</p>
  </section>
  <AuthLoginbox />
</template>

<script setup lang="ts">
definePageMeta({
  name: "login",
  layout: "auth",
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: "/dashboard",
  },
});

useHead({
  title: "RentYourBeat - Anmelden",
});
</script>
