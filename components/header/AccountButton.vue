<template>
  <BaseButton
    v-if="user"
    @click="navigateTo({ name: 'dashboard' })"
    class="!rounded-full"
  >
    Dein Dashboard
  </BaseButton>
  <BaseButton
    v-else-if="hasLoggedIn"
    @click="navigateTo({ name: 'login' })"
    class="!rounded-full"
  >
    Anmelden
  </BaseButton>
  <BaseButton
    v-else
    @click="navigateTo({ name: 'register' })"
    class="!rounded-full"
  >
    Registrieren
  </BaseButton>
</template>

<script lang="ts" setup>
const user = useSupabaseUser();
const hasLoggedIn = useCookie("hasLoggedIn");
</script>
