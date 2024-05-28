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
          :validator="firstnameValidator"
        />
        <AuthFormField
          ref="lastnameField"
          label="Nachname"
          type="text"
          name="lastname"
          autocomplete="family-name"
          :validator="lastnameValidator"
        />
      </div>
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
        autocomplete="new-password"
        :validator="passwordValidator"
      />
      <BaseButton type="submit" class="mt-4 w-full">Registrieren</BaseButton>
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
import { string } from "yup";

const client = useSupabaseClient();

const firstnameValidator = string()
  .required("Vorname ist erforderlich")
  .min(2, "Der Vorname muss mindestens 2 Zeichen lang sein")
  .max(50, "Der Vorname darf maximal 50 Zeichen lang sein");
const lastnameValidator = string()
  .required("Nachname ist erforderlich")
  .min(2, "Der Nachname muss mindestens 2 Zeichen lang sein")
  .max(50, "Der Nachname darf maximal 50 Zeichen lang sein");
const emailValidator = string()
  .required("E-Mail ist erforderlich")
  .email("E-Mail ist ungültig");
const passwordValidator = string()
  .required("Passwort ist erforderlich")
  .min(8, "Das Passwort muss mindestens 8 Zeichen lang sein")
  .matches(
    /[a-z]/,
    "Das Passwort muss mindestens einen Kleinbuchstaben enthalten",
  )
  .matches(
    /[A-Z]/,
    "Das Passwort muss mindestens einen Großbuchstaben enthalten",
  )
  .matches(/\d/, "Das Passwort muss mindestens eine Ziffer enthalten")
  .matches(
    /[=+\[\]()<>?!@#$%^&*.,:;]/,
    "Das Passwort muss mindestens ein Sonderzeichen enthalten: =+[]()<>?!@#$%^&*.,:;",
  )
  .matches(
    /^[a-zA-Z0-9=+\[\]()<>?!@#$%^&*.,:;]*$/,
    "Das Passwort darf nur die folgende Sonderzeichen enthalten: =+[]()<>?!@#$%^&*.,:;",
  );

const firstnameField = ref<InstanceType<typeof AuthFormField>>();
const lastnameField = ref<InstanceType<typeof AuthFormField>>();
const emailField = ref<InstanceType<typeof AuthFormField>>();
const passwordField = ref<InstanceType<typeof AuthFormField>>();

const handleSubmit = async () => {
  const firstnameValid = await firstnameField.value?.validateField();
  const lastnameValid = await lastnameField.value?.validateField();
  const emailValid = await emailField.value?.validateField();
  const passwordValid = await passwordField.value?.validateField();

  if (firstnameValid && lastnameValid && emailValid && passwordValid)
    signInWithEmailAndPassword(
      emailField.value?.value!,
      passwordField.value?.value!,
      firstnameField.value?.value!,
      lastnameField.value?.value!,
    );
};

const signInWithEmailAndPassword = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string,
) => {
  const { data, error } = await client.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name: firstName,
        last_name: lastName,
      },
      emailRedirectTo: `${window.location.origin}/confirm`,
    },
  });

  console.log(data, error);

  if (error) {
    console.error("Sign in error:", error.message);
    return;
  }
};
</script>
