<template>
  <BaseButton
    v-if="user"
    @click="navigateTo({ name: 'dashboard' })"
    class="!rounded-full"
  >
    Dein Dashboard
  </BaseButton>
  <BaseButton
    v-else
    @click="navigateTo({ name: 'login' })"
    class="!rounded-full"
  >
    Anmelden
  </BaseButton>
</template>

<script lang="ts" setup>
const user = useSupabaseUser();
</script>
