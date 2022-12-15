<script setup lang="ts">
import { defineProps, defineEmits, PropType } from 'vue';

const props = defineProps({
  modelValue: { type: String, required: true },
  name: { type: String, required: true },
  errors: { type: Array as PropType<string[]>, required: false, default: () => [] },
  required: { type: Boolean, required: false, default: false },
  placeholder: { type: String, required: false, default: null },
  readOnly: { type: Boolean, required: false, default: false },
  disabled: { type: Boolean, required: false, default: false },
  dataTest: { type: String, required: false, default: 'input' },
  minLength: { type: Number, required: false, default: null },
  maxLength: { type: Number, required: false, default: null },
});

const emit = defineEmits(['update:model-value']);

</script>

<template>
  <input
    :value="props.modelValue"
    :name="props.name"
    :placeholder="props.placeholder"
    :readonly="props.readOnly"
    :disabled="props.disabled"
    :required="props.required"
    :minlength="props.minLength"
    :maxlength="props.maxLength"
    :data-test="props.dataTest"
    type="text"
    class="font-light text-body-sm-sl text-grey-900 border border-solid border-grey-300 rounded-md disabled:bg-grey-250 hover:border-grey-250 p-2 "
    @input.="emit('update:model-value', $event.target?.value)"
  >
</template>
