<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { RadioButtonOption } from '@/atoms/input/RadioButton';
import RadioButton from '@/atoms/input/RadioButton.vue';
import VButton from '@/atoms/button/VButton.vue';
import { usePollStore } from '@/stores/usePollStore';

const store = usePollStore();

const {
  question,
  answers,
  nAnswers,
} = storeToRefs(store);
const { vote } = store;

const selected = ref<RadioButtonOption|null>(null);

const isPollDisabled = computed(() => (
  question.value.length === 0 || nAnswers.value < 2
));

watch(question, () => {
  if (question.value.length === 0) {
    selected.value = null;
  }
});

const options = computed<RadioButtonOption[]>(() => (
  answers.value.map((answer) => ({
    key: answer,
    label: answer,
  }))
));

const onVote = (): void => {
  if (!selected.value) return;

  vote(selected.value.key);
  selected.value = null;
};

const dataTest = 'poll';
</script>

<template>
  <section
    v-if="isPollDisabled"
    class="flex flex-col self-center text-center"
    :data-test="`${dataTest}-empty-state`"
  >
    <h2 class="text-h2 mb-4">
      Poll is disabled
    </h2>
    <p>Add at least 2 answers and one question to enable the pol. </p>
  </section>
  <form
    v-else
    class="w-full h-full flex flex-col justify-between p-8"
    :data-test="`${dataTest}-form`"
    @submit.prevent="onVote()"
  >
    <div>
      <h2
        class="text-h2 text-center"
        :data-test="`${dataTest}-question`"
      >
        {{ question }}
      </h2>
      <div>
        <RadioButton
          v-model="selected"
          :options="options"
          :data-test="`${dataTest}-radio-button`"
          name="poll"
        />
      </div>
    </div>
    <VButton
      label="Vote"
      type="submit"
      :disabled="!selected"
      :data-test="`${dataTest}-vote-btn`"
      class="w-max flex self-end"
    />
  </form>
</template>
