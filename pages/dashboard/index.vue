<template>
  <main class="w-full overflow-x-hidden">
    <SiteBanner
      title="Dein Dashboard"
      description="Hier findest du alle wichtigen Informationen"
    />
    <section class="overflow-hidden">
      <button @click="logout()">Logout</button>
    </section>
  </main>
</template>

<script lang="ts" setup>
definePageMeta({
  name: "dashboard",
});

const logout = async () => {
  await useSupabaseClient().auth.signOut();
  return navigateTo("/login");
};
</script>
