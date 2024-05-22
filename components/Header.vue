<template>
  <header
    class="z-50 flex h-20 w-full items-center justify-between px-6 text-white lg:px-[13%]"
  >
    <div class="flex h-3/5 items-center justify-between gap-4">
      <img
        src="~/assets/images/logo.png"
        alt="RentYourBeat Logo"
        class="h-3/4 xl:h-full"
      />
      <h1 class="text-2xl font-bold xl:text-4xl">RentYourBeat</h1>
    </div>
    <nav>
      <ul class="hidden space-x-4 lg:flex">
        <li v-for="link in links">
          <NuxtLink
            :to="link.path"
            class="delay font-medium transition-colors duration-150 ease-in-out hover:text-gray-300"
          >
            {{ link.name }}
          </NuxtLink>
        </li>
      </ul>
      <ul
        class="fixed right-0 top-0 z-50 flex h-screen w-60 flex-col items-start justify-start bg-black bg-opacity-20 pt-20 backdrop-blur lg:!hidden"
        :class="{ hidden: !sidebar }"
      >
        <NuxtLink
          v-for="link in links"
          :to="link.path"
          class="w-full text-xl font-semibold transition-colors duration-150 ease-in-out hover:bg-black hover:bg-opacity-10 hover:text-gray-300"
          @click="toggleSidebar(false, $event)"
        >
          <li class="mb-1.5 ml-5 mt-1.5">
            {{ link.name }}
          </li>
        </NuxtLink>
      </ul>
    </nav>
    <Icon
      :name="sidebar ? 'mingcute:close-fill' : 'mingcute:menu-fill'"
      size="32px"
      class="right-6 transition-colors duration-150 ease-in-out hover:text-gray-300 lg:!hidden"
      :class="{ 'z-50': sidebar, fixed: sidebar }"
      @click="toggleSidebar(undefined, $event)"
    />
  </header>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const sidebar = ref(false);

const toggleSidebar = (active?: boolean, event?: any) => {
  sidebar.value = active == null ? !sidebar.value : active;
  event.target.blur();
};

const links = ref([
  { name: "Start", path: "/" },
  { name: "Musikanlagen", path: "/musikanlagen" },
  { name: "Lichttechnik", path: "/lichttechnik" },
  { name: "DJ-Equipment", path: "/dj-equipment" },
  { name: "Party-Sets", path: "/party-sets" },
]);
</script>

<style></style>
