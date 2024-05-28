<template>
  <div class="mb-2">
    <label :for="props.name" :class="labelClass">{{ props.label }}</label>
    <div class="relative">
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
        class="w-full rounded-md border p-2 pr-10 shadow-sm"
        :class="inputClass"
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
    <p v-if="errorMessage" class="mt-1 text-xs text-red-500">
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

const labelClass = ref("text-black");
const inputClass = ref("border-gray-300");
const passwordVisible = ref(false);

const handleBlur = async (): void => {
  if (!validateOnChange.value) await validateField();
};

const handleInput = async (): void => {
  if (validateOnChange.value) await validateField();
};

const validateField = async (): Promise<boolean> => {
  const { valid } = await validate();

  if (valid) {
    labelClass.value = "text-black";
    inputClass.value = "border-gray-300";
  } else {
    labelClass.value = "text-red-500";
    inputClass.value = "border-red-500";
  }

  return valid;
};

defineExpose({
  value,
  validateField,
});
</script>
