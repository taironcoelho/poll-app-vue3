import { DOMWrapper, mount, VueWrapper } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import QuestionForm from '@/organisms/poll/QuestionForm.vue';
import { usePollStore } from '@/stores/usePollStore';
import TextInput from '@/atoms/input/TextInput.vue';
import VButton from '@/atoms/button/VButton.vue';

const mockPinia = createTestingPinia({
});

const setup = () => {
  return mount(QuestionForm, {
    global: {
      plugins: [mockPinia],
    },
  });
};

const pollStore = usePollStore();

describe('Question Form', () => {
  beforeEach(() => {
    pollStore.question = 'What do you have for dinner?';
    pollStore.answers = ['Rice and beans', 'Bread and cheese', 'Nothing =('];
    pollStore.votes = {
      'Rice and beans': 1,
      'Bread and cheese': 99,
    };
  });
  describe('question', () => {
    it('should call store.updateQuestion when it gets updated', () => {
      const cmp = setup();
      const questionInput = cmp.findComponent('[data-test="question-form-question-input"]') as VueWrapper<InstanceType<typeof TextInput>>;
      questionInput.vm.$emit('update:model-value', 'What do you have for lunch?');

      expect(pollStore.updateQuestion).toHaveBeenCalledTimes(1);
      expect(pollStore.updateQuestion).toHaveBeenCalledWith('What do you have for lunch?');
    });

    it('should not disable the input field if question has less than 80 characters', () => {
      const cmp = setup();
      const questionInput = cmp.findComponent('[data-test="question-form-question-input"]') as VueWrapper<InstanceType<typeof TextInput>>;

      expect(questionInput.vm.$props.disabled).toBe(false);
    });

    it('should disable the input field if question has more than 80 characters', () => {
      pollStore.question = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It h';
      const cmp = setup();
      const questionInput = cmp.findComponent('[data-test="question-form-question-input"]') as VueWrapper<InstanceType<typeof TextInput>>;

      expect(questionInput.vm.$props.disabled).toBe(true);
    });
  });

  describe('answers', () => {
    it('should render a TextInput and delete button per answer', () => {
      const cmp = setup();

      const firstAnswerInput = cmp.findComponent('[data-test="question-form-answer-input-0"]') as VueWrapper<InstanceType<typeof TextInput>>;
      const firstAnswerDeleteBtn = cmp.find('[data-test="question-form-delete-answer-0-btn"]');

      const secondAnswerInput = cmp.findComponent('[data-test="question-form-answer-input-1"]') as VueWrapper<InstanceType<typeof TextInput>>;
      const secondAnswerDeleteBtn = cmp.find('[data-test="question-form-delete-answer-1-btn"]');

      expect(firstAnswerInput.vm.$props.modelValue).toBe(pollStore.answers[0]);
      expect(secondAnswerInput.vm.$props.modelValue).toBe(pollStore.answers[1]);
      expect(firstAnswerDeleteBtn.exists()).toBe(true);
      expect(secondAnswerDeleteBtn.exists()).toBe(true);
    });

    it('should disable answer field if it has more than 80 characters', () => {
      pollStore.answers = ['Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It h'];
      const cmp = setup();

      const firstAnswerInput = cmp.findComponent('[data-test="question-form-answer-input-0"]') as VueWrapper<InstanceType<typeof TextInput>>;
      expect(firstAnswerInput.vm.$props.disabled).toBe(true);
    });

    it('should disable add new answer button if new the field is empty', () => {
      const cmp = setup();

      const newAnswerInput = cmp.find('[data-test="question-form-new-answer-input"]');
      const addButton = cmp.findComponent('[data-test="question-form-add-new-answer-btn"]') as VueWrapper<InstanceType<typeof VButton>>;
      expect(newAnswerInput.text()).toBe('');
      expect(addButton.vm.$props.disabled).toBe(true);
    });

    it('should call store.updateAnswer when answer gets updated', () => {
      const cmp = setup();

      const firstAnswerInput = cmp.findComponent('[data-test="question-form-answer-input-0"]') as VueWrapper<InstanceType<typeof TextInput>>;
      firstAnswerInput.vm.$emit('update:model-value', 'New value');

      expect(pollStore.updateAnswer).toHaveBeenCalledTimes(1);
      expect(pollStore.updateAnswer).toHaveBeenCalledWith(0, 'New value');
    });

    it('should call store.addAnswer when click in the add answer button', async () => {
      const cmp = setup();

      const newAnswerInput = cmp.find('[data-test="question-form-new-answer-input"]') as DOMWrapper<HTMLInputElement>;
      newAnswerInput.setValue('New option');
      await cmp.vm.$nextTick();
      const addBtn = cmp.find('[data-test="question-form-add-new-answer-btn"]');
      await addBtn.trigger('click');

      expect(pollStore.addAnswer).toHaveBeenCalledTimes(1);
      expect(pollStore.addAnswer).toHaveBeenCalledWith('New option');
    });
  });

  describe('reset', () => {
    it('should call store.reset on button click', async () => {
      const cmp = setup();
      const resetBtn = cmp.find('[data-test="question-form-reset-btn"]');
      await resetBtn.trigger('click');

      expect(pollStore.reset).toHaveBeenCalledTimes(1);
    });
  });
});
