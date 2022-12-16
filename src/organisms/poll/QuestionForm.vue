<script setup lang="ts">
import { computed, ref } from 'vue';
import { storeToRefs } from 'pinia';
import TextInput from '@/atoms/input/TextInput.vue';
import VButton from '@/atoms/button/VButton.vue';
import { usePollStore } from '@/stores/usePollStore';

const store = usePollStore();
const {
  updateQuestion,
  addAnswer,
  updateAnswer,
  deleteAnswer,
  reset,
} = store;
const { question, answers, nAnswers } = storeToRefs(store);
const newAnswer = ref('');
const isAddButtonDisabled = computed(() => question.value.length === 0 || newAnswer.value.length === 0);

const onReset = () => {
  newAnswer.value = '';
  reset();
};

const onAddAnswer = () => {
  addAnswer(newAnswer.value);
  newAnswer.value = '';
};

const dataTest = 'question-form';
</script>

<template>
  <section class="w-full h-full p-8 flex flex-col justify-between">
    <div>
      <TextInput
        placeholder="Type a question"
        name="question"
        class="w-full mb-4"
        :model-value="question"
        :min-length="1"
        :max-length="80"
        :data-test="`${dataTest}-question-input`"
        :disabled="question.length > 80"
        @update:model-value="updateQuestion($event)"
      />
      <div
        v-for="(answer, index) in answers"
        :key="index"
        class="w-full flex my-4"
      >
        <TextInput
          class="w-full"
          placeholder="Type an answer"
          :model-value="answer"
          :name="`answer-${index}`"
          :min-length="1"
          :max-length="80"
          :data-test="`${dataTest}-answer-input-${index}`"
          :disabled="answer.length > 80"
          @update:model-value="updateAnswer(index, $event)"
        />
        <VButton
          class="ml-2 w-12"
          theme="secondary"
          :data-test="`${dataTest}-delete-answer-${index}-btn`"
          @click="deleteAnswer(index)"
        >
          X
        </VButton>
      </div>
      <div
        v-if="nAnswers < 10"
        class="w-full flex my-4"
      >
        <TextInput
          v-model="newAnswer"
          :min-length="1"
          :max-length="80"
          :data-test="`${dataTest}-new-answer-input`"
          name="newOption"
          placeholder="Type an answer"
          class="w-full"
        />
        <VButton
          label="Add"
          class="ml-2 w-12"
          :data-test="`${dataTest}-add-new-answer-btn`"
          :disabled="isAddButtonDisabled"
          @click="onAddAnswer()"
        />
      </div>
    </div>
    <div class="flex w-full justify-between">
      <p :data-test="`${dataTest}-number-answers`">
        {{ `${nAnswers}/10 possible answers` }}
      </p>
      <VButton
        label="Reset"
        theme="secondary"
        :data-test="`${dataTest}-reset-btn`"
        @click="onReset()"
      />
    </div>
  </section>
</template>
