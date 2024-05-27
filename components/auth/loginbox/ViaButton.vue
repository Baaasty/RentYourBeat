<template>
  <BaseButton class="!bg-black hover:!bg-blue-600">
    <Icon :name="iconname" size="46" />
    <span class="text-md md:text-sm">{{ text }}</span>
  </BaseButton>
</template>

<script lang="ts" setup>
defineProps<{
  iconname: string;
  text: string;
}>();
</script>
