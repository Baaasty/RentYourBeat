<template>
  <NuxtLink
    v-if="user"
    :to="{ name: 'dashboard' }"
    class="rounded-full bg-blue-500 px-4 py-2 font-semibold text-white duration-150 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
  >
    Dein Dashboard
  </NuxtLink>
  <NuxtLink
    v-else
    :to="{ name: 'login' }"
    class="rounded-full bg-blue-500 px-4 py-2 font-semibold text-white duration-150 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
  >
    Anmelden
  </NuxtLink>
</template>

<script lang="ts" setup>
const user = useSupabaseUser();

const logout = async () => {
  await useSupabaseClient().auth.signOut();
  return navigateTo("/login");
};
</script>
