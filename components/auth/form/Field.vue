<template>
  <div class="mb-2">
    <label
      :for="props.name"
      :class="{ 'text-red-500': !fieldValid, 'text-black': fieldValid }"
    >
      {{ props.label }}
    </label>
    <div class="group relative">
      <input
        v-model="value"
        :type="
          props.type !== 'password'
            ? props.type
            : passwordVisible
              ? 'text'
              : 'password'
        "
        :name="props.name"
        :id="props.name"
        :autocomplete="props.autocomplete"
        class="w-full rounded-md border p-2 pr-10 shadow-sm transition-all focus:bg-gray-200 group-hover:bg-gray-200"
        :class="{
          'border-red-500': !fieldValid,
          'border-gray-300': fieldValid,
        }"
        @blur="handleBlur"
        @input="handleInput"
      />
      <Icon
        :name="
          !passwordVisible ? 'mingcute:eye-close-line' : 'mingcute:eye-line'
        "
        size="28"
        @click="passwordVisible = !passwordVisible"
        v-if="props.type === 'password'"
        class="absolute right-0 top-1/2 z-10 float-right h-full w-auto -translate-y-1/2 transform cursor-pointer p-2"
      />
    </div>
    <p
      v-show="errorMessage"
      class="mt-1 text-xs text-red-500 transition-opacity duration-150"
    >
      {{ errorMessage }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { StringSchema } from "yup";

interface Props {
  label: string;
  type: "text" | "email" | "password";
  name: string;
  initialValue?: string;
  autocomplete?: string;
  validateOnChange?: boolean;
  validator?: StringSchema<string> | undefined;
}

const props = withDefaults(defineProps<Props>(), {
  validator: undefined,
});

const validateOnChange = toRef(props, "validateOnChange");

const { value, errorMessage, validate } = useField(
  props.name,
  props.validator,
  {
    initialValue: props.initialValue,
    validateOnValueUpdate: validateOnChange.value,
  },
);

const fieldValid = ref(true);
const passwordVisible = ref(false);

const handleBlur = async () => {
  if (!validateOnChange.value) await validateField();
};

const handleInput = async () => {
  if (validateOnChange.value) await validateField();
};

const validateField = async (): Promise<boolean> => {
  const { valid } = await validate();

  fieldValid.value = valid;

  return valid;
};

defineExpose({
  value,
  validateField,
});
</script>
