<template>
  <div
    class="flex min-h-[460px] w-[450px] max-w-[90vw] flex-col justify-between gap-4 rounded-lg bg-white p-6 text-black md:p-10"
  >
    <div>
      <h3 class="text-2xl font-semibold">Registrieren</h3>
      <p class="mt-1 hidden md:block">Erstelle dein Konto bei uns.</p>
    </div>
    <form @submit.prevent="handleSubmit">
      <div class="flex gap-3">
        <AuthFormField
          ref="firstnameField"
          label="Vorname"
          type="text"
          name="firstname"
          autocomplete="given-name"
          :schema="registerSchema.firstname"
        />
        <AuthFormField
          ref="lastnameField"
          label="Nachname"
          type="text"
          name="lastname"
          autocomplete="family-name"
          :schema="registerSchema.lastname"
        />
      </div>
      <AuthFormField
        ref="emailField"
        label="E-Mail"
        type="email"
        name="email"
        autocomplete="email"
        :schema="registerSchema.email"
      />
      <AuthFormField
        ref="passwordField"
        label="Passwort"
        type="password"
        name="password"
        autocomplete="new-password"
        :schema="registerSchema.password"
      />
      <BaseButton
        type="submit"
        class="mt-4 w-full disabled:cursor-not-allowed disabled:bg-gray-300"
        :disabled="loading === true"
        :class="{
          '!bg-red-500': success === false,
          '!bg-green-500': success === true,
        }"
      >
        {{
          success === false
            ? "Fehlgeschlagen"
            : loading === true
              ? "Lädt..."
              : "Registrieren"
        }}
      </BaseButton>
      <p class="mt-1 text-xs drop-shadow-md">
        Du hast bereits ein Konto?
        <NuxtLink
          :to="{ name: 'login' }"
          class="text-blue-500 hover:text-blue-600"
        >
          Anmelden
        </NuxtLink>
      </p>
    </form>
  </div>
</template>

<script lang="ts" setup>
import type { AuthFormField } from "#build/components";
import * as registerSchema from "~/utils/schemas/register.schema";

const firstnameField = ref<InstanceType<typeof AuthFormField>>();
const lastnameField = ref<InstanceType<typeof AuthFormField>>();
const emailField = ref<InstanceType<typeof AuthFormField>>();
const passwordField = ref<InstanceType<typeof AuthFormField>>();

const loading = ref<boolean>();
const success = ref<boolean>();

const handleSubmit = async () => {
  const firstnameValid = await firstnameField.value?.validateField();
  const lastnameValid = await lastnameField.value?.validateField();
  const emailValid = await emailField.value?.validateField();
  const passwordValid = await passwordField.value?.validateField();

  if (firstnameValid && lastnameValid && emailValid && passwordValid) {
    loading.value = true;

    signInWithEmailAndPassword(
      emailField.value?.value!,
      passwordField.value?.value!,
      firstnameField.value?.value!,
      lastnameField.value?.value!,
    );
  }
};

const signInWithEmailAndPassword = async (
  email: string,
  password: string,
  firstname: string,
  lastname: string,
) => {
  const { error } = await useFetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password, firstname, lastname }),
  });

  success.value = error.value === null;
  loading.value = false;
};
</script>
