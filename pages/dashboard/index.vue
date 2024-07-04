<template>
  <main class="w-full overflow-x-hidden">
    <SiteBanner
      title="Dein Dashboard"
      description="Hier findest du alle wichtigen Informationen"
    />
    <section class="overflow-hidden pt-4">
      <BaseButton @click="signOut()">LOGOUT</BaseButton>
      <pre>{{ status }}</pre>
      <pre>{{ user }}</pre>
    </section>
  </main>
</template>

<script lang="ts" setup>
definePageMeta({
  name: "dashboard",
  middleware: "auth",
});

useHead({
  title: "RentYourBeat - Dein Dashboard",
});

const { signOut, status, user } = useAuth();
</script>
