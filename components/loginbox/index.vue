<template>
  <div class="w-[450px] max-w-[90vw] rounded-lg bg-white p-10 text-black">
    <div>
      <div class="mb-6">
        <h3 class="mb-1 text-2xl font-semibold">Anmelden</h3>
        <p>Melde dich mit deinem Konto bei uns an.</p>
      </div>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <LoginboxViaButton
          iconname="mingcute:google-fill"
          text="Anmelden mit Google"
          @click="$emit('signInWithOAuth', 'google')"
        />
        <LoginboxViaButton
          iconname="mingcute:facebook-fill"
          text="Anmelden mit Facebook"
          @click="$emit('signInWithOAuth', 'facebook')"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
