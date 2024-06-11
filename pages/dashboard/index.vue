<template>
  <main class="w-full overflow-x-hidden">
    <SiteBanner
      title="Dein Dashboard"
      description="Hier findest du alle wichtigen Informationen"
    />
    <section class="overflow-hidden pt-4">
      <BaseButton @click="signOut()">LOGOUT</BaseButton>
      <p class="whitespace-pre-wrap">{{ data }}</p>
    </section>
  </main>
</template>

<script lang="ts" setup>
definePageMeta({
  name: "dashboard",
});

useHead({
  title: "RentYourBeat - Dein Dashboard",
});

const { signOut } = useAuth();

const { data } = useFetch("/api/me");
</script>
