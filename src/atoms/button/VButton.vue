<script setup lang="ts">
import { defineProps, defineEmits, PropType } from 'vue';

const props = defineProps({
  label: { type: String, required: false, default: null },
  type: { type: String as PropType<'submit'|'button'|'reset'|undefined>, required: false, default: 'button' },
  theme: { type: String as PropType<'primary'|'secondary'>, required: false, default: 'primary' },
  disabled: { type: Boolean, required: false, default: false },
  dataTest: { type: String, required: false, default: 'button' },
});

const emit = defineEmits(['click']);

const onClick = () => {
  if (props.disabled) return;

  emit('click');
};

const classes = {
  primary: 'bg-orange-500 text-white hover:bg-orange-600 hover:border-orange-600 disabled:bg-grey-250 disabled:border-grey-250 disabled:text-grey-450 active:bg-orange-700 active:border-orange-700',
  secondary: 'bg-grey-250 border-grey-250 hover:bg-grey-300 hover:border-grey-300 disabled:bg-grey-200 disabled:border-grey-200 active:bg-grey-400 active:border-grey-400',
};

</script>

<template>
  <button
    :type="props.type"
    :disabled="props.disabled"
    :data-test="props.dataTest"
    @click="onClick()"
    class="p-2 border rounded-md text-body-sm-sl"
    :class="classes[props.theme]"
  >
    <slot>
      {{ props.label }}
    </slot>
  </button>
</template>
