<template>
  <BaseButton
    v-if="user"
    @click="navigateTo({ name: 'dashboard' })"
    class="!rounded-full"
  >
    {{
      user.user_metadata.first_name !== undefined &&
      user.user_metadata.last_name !== undefined
        ? user.user_metadata.first_name + " " + user.user_metadata.last_name
        : user.user_metadata.full_name
    }}
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
