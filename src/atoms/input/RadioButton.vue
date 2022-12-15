<script setup lang="ts">
import { defineProps, defineEmits, PropType } from 'vue';
import { RadioButtonOption } from './RadioButton';

const props = defineProps({
  options: { type: Array as PropType<RadioButtonOption[]>, required: true },
  name: { type: String, required: true },
  disabled: { type: Boolean, required: false, default: false },
  modelValue: { type: Object as PropType<RadioButtonOption|null>, required: false, default: null },
  dataTest: { type: String, required: false, default: 'radio-button' },
});

const emit = defineEmits(['update:modelValue']);

const onInputChange = (option: RadioButtonOption) => {
  if (props.disabled) return;

  emit('update:modelValue', option);
};

const isChecked = (key: string) => props.modelValue ? props.modelValue.key === key : false;

</script>
<template>
  <label
    v-for="option in props.options"
    :key="option.key"
    :data-test="`${props.dataTest}-${option.key}-label`"
    class="text-label text-grey-900 flex my-4"
  >
    <input
      type="radio"
      :name="props.name"
      :id="option.key"
      :checked="isChecked(option.key)"
      :disabled="props.disabled"
      :data-test="`${props.dataTest}-${option.key}-input`"
      class="mr-1 w-4 h-4 p-1 border border-grey-300 rounded-full checked:border-blue-500 checked:bg-blue-500 focus:border-purple-500 disabled:border-grey-300 disabled:bg-grey-300"
      @change="onInputChange(option)"
    >
    {{ option.label }}</label>
</template>
