<template>
  <BaseButton class="!justify-start !bg-black px-3 hover:!bg-blue-600">
    <Icon :name="iconname" size="48" />
    <p class="md:text-sm">{{ text }}</p>
  </BaseButton>
</template>

<script lang="ts" setup>
defineProps<{
  iconname: string;
  text: string;
}>();
</script>
