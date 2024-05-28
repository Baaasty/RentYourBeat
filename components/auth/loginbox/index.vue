<template>
  <div
    class="flex min-h-[460px] w-[450px] max-w-[90vw] flex-col justify-between gap-4 rounded-lg bg-white p-6 text-black md:p-10"
  >
    <div>
      <h3 class="text-2xl font-semibold">Anmelden</h3>
      <p class="mt-1 hidden md:block">
        Melde dich mit deinem Konto bei uns an.
      </p>
    </div>
    <form @submit.prevent="handleSubmit">
      <AuthFormField
        ref="emailField"
        label="E-Mail"
        type="email"
        name="email"
        autocomplete="email"
        :validator="emailValidator"
      />
      <AuthFormField
        ref="passwordField"
        label="Passwort"
        type="password"
        name="password"
        autocomplete="current-password"
        :validator="passwordValidator"
      />
      <BaseButton type="submit" class="mt-4 w-full">Einloggen</BaseButton>
      <p class="mt-1 text-xs drop-shadow-md">
        Noch kein Konto?
        <NuxtLink
          :to="{ name: 'register' }"
          class="text-blue-500 hover:text-blue-600"
        >
          Jetzt registrieren
        </NuxtLink>
      </p>
    </form>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <AuthLoginboxViaButton
        iconname="mingcute:google-fill"
        text="Anmelden mit Google"
        @click="signInWithOAuth('google')"
      />
      <AuthLoginboxViaButton
        iconname="mingcute:facebook-fill"
        text="Anmelden mit Facebook"
        @click="signInWithOAuth('facebook')"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { AuthFormField } from "#build/components";
import { string } from "yup";

const client = useSupabaseClient();

const emailValidator = string()
  .required("E-Mail ist erforderlich")
  .email("E-Mail ist ungültig");
const passwordValidator = string().required("Passwort ist erforderlich");

const emailField = ref<InstanceType<typeof AuthFormField>>();
const passwordField = ref<InstanceType<typeof AuthFormField>>();

const handleSubmit = async () => {
  const emailValid = await emailField.value?.validateField();
  const passwordValid = await passwordField.value?.validateField();

  if (emailValid && passwordValid)
    signInWithEmailAndPassword(
      emailField.value?.value!,
      passwordField.value?.value!,
    );
};

const signInWithEmailAndPassword = async (email: string, password: string) => {
  const { data, error } = await client.auth.signInWithPassword({
    email,
    password,
  });

  if (error) return console.error("Sign in error:", error.message);

  navigateTo({ name: "confirm" });
};

type Provider = "google" | "facebook";

const signInWithOAuth = async (prov: Provider) => {
  const { data, error } = await client.auth.signInWithOAuth({
    provider: prov,
    options: {
      redirectTo: `${window.location.origin}/confirm`,
    },
  });

  if (error) return console.error("Sign in error:", error.message);
};
</script>
