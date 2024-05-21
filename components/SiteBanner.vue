<template>
  <section class="relative z-0 min-h-[250px] overflow-hidden">
    <div
      class="absolute -z-50 h-[210%] w-[110%] bg-pizazz-500 bg-[100%] bg-no-repeat"
      :class="`bg-[url('${props.image}')]`"
    />
  </section>
</template>

<script lang="ts" setup>
const props = defineProps(["title", "description", "image"]);
</script>

<style></style>
