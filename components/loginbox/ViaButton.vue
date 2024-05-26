<template>
  <button
    class="flex w-full items-center gap-3 rounded bg-black px-3 py-2 text-left text-white"
  >
    <Icon :name="iconname" size="42" />
    <span class="text-md md:text-sm">{{ text }}</span>
  </button>
</template>

<script lang="ts" setup>
defineProps<{
  iconname: string;
  text: string;
}>();
</script>

<style></style>
