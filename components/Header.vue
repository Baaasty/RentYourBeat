<template>
  <header
    class="absolute z-50 flex h-20 w-full items-center justify-between px-6 text-white lg:px-[13%]"
  >
    <div class="flex h-3/5 items-center justify-between gap-4">
      <img
        src="~/assets/images/logo-white.png"
        alt="RentYourBeat Logo"
        class="h-3/4 xl:h-full"
      />
      <h1 class="text-2xl font-bold xl:text-4xl">RentYourBeat</h1>
    </div>
    <nav>
      <ul class="hidden space-x-4 lg:flex">
        <NuxtLink
          v-for="link in links"
          :to="{ name: link.page }"
          class="delay font-normal transition-colors duration-150 ease-in-out hover:text-gray-300"
          :class="{
            '!font-semibold': $route.name === link.page,
          }"
        >
          <li>
            {{ link.name }}
          </li>
        </NuxtLink>
      </ul>
      <ul
        class="fixed right-0 top-0 z-50 flex h-screen w-full flex-col items-start justify-start bg-black bg-opacity-20 pt-20 backdrop-blur md:w-60 lg:hidden"
        v-if="sidebar"
      >
        <NuxtLink
          v-for="link in links"
          :to="link.page"
          class="w-full pb-1.5 pl-5 pt-1.5 text-xl font-semibold transition-colors duration-150 ease-in-out hover:bg-black hover:bg-opacity-10 hover:text-gray-300"
          @click="toggleSidebar(false)"
        >
          <li>
            {{ link.name }}
          </li>
        </NuxtLink>
      </ul>
    </nav>
    <Icon
      :name="sidebar ? 'mingcute:close-fill' : 'mingcute:menu-fill'"
      size="32px"
      class="right-6 transition-colors duration-150 ease-in-out lg:!hidden"
      :class="{ 'z-50': sidebar, fixed: sidebar }"
      @click="toggleSidebar(null)"
    />
  </header>
</template>

<script lang="ts" setup>
const client = useSupabaseClient();
const user = useSupabaseUser();

const isLoggedin = computed(() => user.value !== null);
const sidebar = ref(false);

const logout = async () => {
  await client.auth.signOut();
  return navigateTo("/login");
};

const toggleSidebar = (active: boolean | null) => {
  sidebar.value = active == null ? !sidebar.value : active;
};

const links = [
  { name: "Start", page: "start" },
  { name: "Musikanlagen", page: "musikanlagen" },
  { name: "Lichttechnik", page: "lichttechnik" },
  { name: "DJ-Equipment", page: "dj-equipment" },
  { name: "Party-Sets", page: "party-sets" },
];
</script>

<style></style>
