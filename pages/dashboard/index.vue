<template>
  <main class="w-full overflow-x-hidden">
    <SiteBanner
      title="Dein Dashboard"
      description="Hier findest du alle wichtigen Informationen"
    />
    <section class="overflow-hidden">
      <button @click="logout">LOGOUT</button>
      <p class="whitespace-pre-wrap">{{ JSON.stringify(user, null, 2) }}</p>
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

const client = useSupabaseClient();
const user = useSupabaseUser();

const logout = async () => {
  await client.auth.signOut();
  return navigateTo("/login");
};
</script>
