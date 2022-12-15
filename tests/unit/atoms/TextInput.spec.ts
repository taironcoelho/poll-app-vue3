import TextInput from '@/atoms/input/TextInput.vue';
import { mount } from '@vue/test-utils';

let mockProps = {
  modelValue: '',
  name: 'input0',
};

beforeEach(() => {
  mockProps = {
    modelValue: '',
    name: 'input0',
  };
});

describe('TextInput', () => {
  it('should set the initial value received by prop', () => {
    mockProps.modelValue = 'Initial value';
    const cmp = mount(TextInput, { props: mockProps });
    const input = cmp.find('[data-test="input"]').element as HTMLInputElement;

    expect(input.value).toBe(mockProps.modelValue);
  });

  describe('on input', () => {
    it('should emit @update:modelValue', async () => {
      const cmp = mount(TextInput, { props: mockProps });
      const input = cmp.find('[data-test="input"]');
      await input.setValue('foo bar');

      expect(cmp.emitted()['update:model-value'].length).toBe(1);
      expect(cmp.emitted()['update:model-value'][0]).toEqual(['foo bar']);
    });
  });
});
