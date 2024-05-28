<template>
  <main
    class="flex h-svh items-center justify-around bg-pizazz-500 bg-[url('~/assets/images/start-background.webp')] bg-[length:auto_80%] bg-[-160px_140%] bg-no-repeat pt-14"
  >
    <section class="hidden w-[350px] flex-col gap-4 text-white lg:flex">
      <h2 class="text-3xl font-bold">
        Willkommen zurück <br />
        Schön, dass du da bist!
      </h2>
      <p class="italic">- Dein RentYourBeat-Team</p>
    </section>
    <AuthLoginbox />
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  name: "login",
});

useHead({
  title: "RentYourBeat - Anmelden",
});
</script>
