<template>
  <section class="hidden w-[350px] flex-col gap-4 text-white lg:flex">
    <h2 class="text-3xl font-bold">
      Herzlich Willkommen <br />
      Lass uns loslegen!
    </h2>
    <p class="italic">- Dein RentYourBeat-Team</p>
  </section>
  <AuthRegisterbox />
</template>

<script lang="ts" setup>
definePageMeta({
  name: "register",
  layout: "auth",
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: "/dashboard",
  },
});

useHead({
  title: "RentYourBeat - Registrieren",
});
</script>
