<template>
  <div class="mb-2">
    <label :for="props.name" :class="labelClass">{{ props.label }}</label>
    <input
      v-model="value"
      :type="props.type"
      :name="props.name"
      :id="props.name"
      :autocomplete="props.autocomplete"
      class="w-full rounded-md border p-2"
      :class="inputClass"
      @blur="handleBlur"
      @input="handleInput"
    />
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

const handleBlur = async () => {
  if (!validateOnChange.value) await validateField();
};

const handleInput = async () => {
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
