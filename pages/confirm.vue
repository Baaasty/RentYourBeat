<template>
  <div>Waiting for login...</div>
</template>

<script setup lang="ts">
definePageMeta({
  name: "confirm",
});

useHead({
  title: "RentYourBeat - Warte auf Weiterleitung...",
});

const user = useSupabaseUser();

const cookieName = useRuntimeConfig().public.supabase.cookieName;
const redirectPath = useCookie(`${cookieName}-redirect-path`).value;

watch(
  user,
  () => {
    if (user.value) {
      useCookie(`${cookieName}-redirect-path`).value = null;
      useCookie("hasLoggedIn").value = "true";
      return navigateTo(redirectPath || "/");
    }
  },
  { immediate: true },
);
</script>
