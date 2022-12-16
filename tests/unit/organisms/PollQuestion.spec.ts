import { mount, VueWrapper } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import PollQuestion from '@/organisms/poll/PollQuestion.vue';
import { usePollStore } from '@/stores/usePollStore';
import RadioButton from '@/atoms/input/RadioButton.vue';
import { RadioButtonOption } from '@/atoms/input/RadioButton';

const mockPinia = createTestingPinia({});

const setup = () => {
  return mount(PollQuestion, {
    global: {
      plugins: [mockPinia],
    },
  });
};

const pollStore = usePollStore();

describe('Poll Question', () => {
  describe('Empty state', () => {
    pollStore.question = '';
    pollStore.answers = [];
    pollStore.votes = {};
  });
  it('should render empty state if question is empty', () => {
    pollStore.answers = ['Rice and beans', 'Bread and cheese', 'Nothing =('];
    const cmp = setup();

    const emptyState = cmp.find('[data-test="poll-empty-state"]');
    expect(emptyState.exists()).toBe(true);
  });

  it('should render empty state if answers is less than 2', () => {
    pollStore.question = 'What do you have for dinner?';
    pollStore.answers = ['Rice and beans'];
    const cmp = setup();

    const emptyState = cmp.find('[data-test="poll-empty-state"]');
    expect(emptyState.exists()).toBe(true);
  });

  it('should not render empty state if has a question and more than 2 answers', () => {
    pollStore.question = 'What do you have for dinner?';
    pollStore.answers = ['Rice and beans', 'Bread and cheese', 'Nothing =('];
    const cmp = setup();

    const emptyState = cmp.find('[data-test="poll-empty-state"]');
    expect(emptyState.exists()).toBe(false);
  });
});

describe('vote', () => {
  beforeEach(() => {
    pollStore.question = 'What do you have for dinner?';
    pollStore.answers = ['Rice and beans', 'Bread and cheese', 'Nothing =('];
    pollStore.votes = {};
  });

  it('should render question', () => {
    const cmp = setup();

    const question = cmp.find('[data-test="poll-question"]');
    expect(question.text()).toBe(pollStore.question);
  });

  it('should render all answers as options', () => {
    const cmp = setup();

    const radioButton = cmp.findComponent('[data-test="poll-radio-button"]') as VueWrapper<InstanceType<typeof RadioButton>>;
    const options = radioButton.vm.$props.options;
    pollStore.answers.forEach((answer) => {
      expect(options.find((option :RadioButtonOption) => option.label === answer)).toBeTruthy();
    });
  });

  it('should render answers without option selected', () => {
    const cmp = setup();

    const radioButton = cmp.findComponent('[data-test="poll-radio-button"]') as VueWrapper<InstanceType<typeof RadioButton>>;
    expect(radioButton.vm.$props.modelValue).toBeFalsy();
  });

  it('should disable vote button if no option is selected', async () => {
    const cmp = setup();
    const voteBtn = cmp.find('[data-test="poll-vote-btn"]');

    expect(voteBtn.attributes('disabled')).toBe('');
  });

  it('should call store.vote on vote', async () => {
    const cmp = setup();

    const radioButton = cmp.findComponent('[data-test="poll-radio-button"]') as VueWrapper<InstanceType<typeof RadioButton>>;
    const voteOption = { key: 'Rice and beans', label: 'Rice and beans' };
    radioButton.vm.$emit('update:modelValue', voteOption);
    await cmp.vm.$nextTick();

    const form = cmp.find('[data-test="poll-form"]');
    await form.trigger('submit');

    expect(pollStore.vote).toHaveBeenCalledTimes(1);
    expect(pollStore.vote).toHaveBeenCalledWith(voteOption.key);
  });
});
