<template>
  <main class="w-full overflow-x-hidden">
    <section class="relative h-[550px] overflow-hidden pb-5 pt-20 lg:h-[90vh]">
      <div
        class="absolute -left-8 bottom-0 -z-50 h-[120%] w-[130%] origin-top-left -rotate-6 rounded-[3rem] bg-pizazz-500 bg-[url('~/assets/images/start-background.webp')] bg-[length:auto_75%] bg-[-160px_140%] bg-no-repeat"
      />
      <div
        class="flex h-full w-full flex-col items-center justify-around pb-10 text-center"
      >
        <div
          class="flex flex-col items-center gap-6 px-6 font-medium text-white"
        >
          <h2 class="text-3xl md:text-4xl">
            Einfach <b>mieten</b>, groß <b>feiern</b>!
          </h2>
          <p class="w-11/12 text-lg md:w-3/5 md:text-xl lg:w-2/5">
            Mit <b>RentYourBeat</b> kannst du Eventtechnik für deine Feier ganz
            einfach online mieten. Keine Anrufe, keine E-Mails – alles über
            unser Dashboard. Also, worauf wartest du? Lass die Party steigen!
          </p>
          <NuxtLink
            :to="{ name: 'musikanlagen' }"
            class="mt-8 inline-block transform rounded-full bg-blue-500 px-6 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
          >
            Musikanlage auswählen
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
definePageMeta({
  name: "start",
});
</script>
