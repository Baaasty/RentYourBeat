<template>
  <main class="w-full overflow-x-hidden">
    <SiteBanner
      title="Dein Dashboard"
      description="Hier findest du alle wichtigen Informationen"
    />
    <section class="overflow-hidden">
      <button @click="logout">LOGOUT</button>
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

const logout = async () => {
  await client.auth.signOut();
  return navigateTo("/login");
};
</script>
