import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

export const usePollStore = defineStore('poll', () => {
  const question = ref<string>('');
  const answers = ref<string[]>([]);
  const votes = ref<{[key: string]: number}>({});

  const nAnswers = computed(() => answers.value.length);

  const vote = (answer: string) => {
    if (Object.prototype.hasOwnProperty.call(votes.value, answer)) {
      votes.value[answer] = votes.value[answer] + 1;
    } else {
      votes.value[answer] = 1;
    }
  };

  const updateQuestion = (newQuestion: string) => {
    question.value = newQuestion;
  };

  const addAnswer = (answer: string) => {
    answers.value.push(answer);
  };

  const deleteAnswer = (index: number) => {
    if (answers.value[index] === undefined) return;

    answers.value.splice(index, 1);
  };

  const updateAnswer = (index: number, answer: string) => {
    if (answers.value[index] === undefined) return;

    answers.value[index] = answer;
  };

  const reset = () => {
    votes.value = {};
    answers.value = [];
    question.value = '';
  };

  return {
    question,
    answers,
    votes,
    nAnswers,
    updateQuestion,
    addAnswer,
    updateAnswer,
    deleteAnswer,
    vote,
    reset,
  };
});
