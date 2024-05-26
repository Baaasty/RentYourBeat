<template>
  <section class="relative z-40 min-h-[250px] overflow-hidden">
    <div
      class="absolute flex h-full w-full flex-col justify-around bg-pizazz-500 bg-[length:auto_75%] bg-right-bottom bg-no-repeat px-6 pb-5 pt-20 lg:bg-[length:auto_85%] lg:px-[13%]"
      :class="image"
    >
      <div class="w-full text-white lg:w-[85%] xl:w-[75%]">
        <h2 class="text-xl font-semibold xl:text-3xl">{{ title }}</h2>
        <p>{{ description }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
  description: string;
  image?: string;
}>();
</script>

<style></style>
