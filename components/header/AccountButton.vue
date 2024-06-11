<template>
  <BaseButton
    v-if="status === 'authenticated'"
    @click="navigateTo({ name: 'dashboard' })"
    class="!rounded-full"
  >
    Dashboard
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
const { status } = useAuth();
</script>
