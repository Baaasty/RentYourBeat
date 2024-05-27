<template>
  <div
    class="w-[450px] max-w-[90vw] rounded-lg bg-white p-6 text-black md:p-10"
  >
    <div class="flex flex-col gap-6">
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
  </div>
</template>

<script lang="ts" setup>
import type { AuthFormField } from "#build/components";
import { string } from "yup";

const client = useSupabaseClient();

const emailValidator = string()
  .required("E-Mail is required")
  .email("E-Mail is invalid.");
const passwordValidator = string()
  .required("Password is required")
  .min(8, "Password must be at least 8 characters")
  .matches(/[a-z]/, "Password must contain at least one lowercase letter")
  .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
  .matches(/\d/, "Password must contain at least one digit")
  .matches(
    /[!@#$%^&*.,]/,
    "Password must contain at least one special character: !@#$%^&*",
  );

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

  if (error) {
    console.error("Sign in error:", error.message);
    return;
  }

  navigateTo({ name: "confirm" });
};

type Provider = "google" | "facebook";

const signInWithOAuth = async (prov: Provider) => {
  const { data, error } = await client.auth.signInWithOAuth({
    provider: prov,
    options: {
      redirectTo: `${useRuntimeConfig().public.siteUrl}/confirm/`,
    },
  });

  if (error) console.error("Sign in error:", error.message);
};
</script>
