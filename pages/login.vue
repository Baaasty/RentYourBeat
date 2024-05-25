<template>
  <main
    class="flex min-h-screen flex-col items-center justify-center bg-gray-100"
  >
    <h1 class="mb-8 text-4xl font-bold">LoginPage</h1>
    <button
      @click="signInWithOAuth('google')"
      class="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
    >
      Sign in with Google
    </button>
  </main>
</template>

<script lang="ts" setup>
const client = useSupabaseClient();

type Provider = "google";

const signInWithOAuth = async (prov: Provider) => {
  const { data, error } = await client.auth.signInWithOAuth({
    provider: prov,
    options: {
      redirectTo: "http://localhost:3000/confirm",
    },
  });

  if (error) console.error("OAuth error:", error.message);
};
</script>
