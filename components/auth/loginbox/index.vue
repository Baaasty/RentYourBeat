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
        v-for="provider in providers"
        :key="provider.id.name"
        :iconname="`mingcute:${provider.id}-fill`"
        :text="`Anmelden mit ${provider.name}`"
        @click="signIn(provider.id.toString())"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { AuthFormField } from "#build/components";
import { string } from "yup";

const { signIn, getProviders } = useAuth();
const providers = Object.values(await getProviders()).filter(
  (provider) => (provider.id as unknown as string) !== "credentials",
);

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

const signInWithEmailAndPassword = async (
  email: string,
  password: string,
) => {};
</script>
