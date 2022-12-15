import { mount } from '@vue/test-utils';
import { RadioButtonOption } from '@/atoms/input/RadioButton';
import RadioButton from '@/atoms/input/RadioButton.vue';

const mockOptions = [
  { key: 'option-a', label: 'Option A' },
  { key: 'option-b', label: 'Option B' },
];

const setup = (modelValue: RadioButtonOption|null = null, disabled = false) => {
  return mount(RadioButton, {
    props: {
      modelValue,
      disabled,
      name: 'radio',
      options: mockOptions,
    },
  });
};
describe('RadioButton', () => {
  it('should set the initial value received by prop', () => {
    const cmp = setup(mockOptions[0]);
    const input = cmp.find('[data-test="radio-button-option-a-input"]').element as HTMLInputElement;

    expect(input.checked).toBe(true);
  });

  describe('onChange', () => {
    it('should emit update:modelValue if it is not disabled', async () => {
      const cmp = setup();
      const input = cmp.find('[data-test="radio-button-option-a-input"]');
      await input.trigger('change');

      expect(cmp.emitted()['update:modelValue'].length).toBe(1);
      expect(cmp.emitted()['update:modelValue'][0]).toEqual(
        [mockOptions[0]],
      );
    });

    it('should not emit update:modelValue if it is disabled', async () => {
      const cmp = setup(null, true);
      const input = cmp.find('[data-test="radio-button-option-a-input"]');
      await input.trigger('change');

      expect(cmp.emitted()['update:modelValue']).toBeUndefined();
    });
  });
});
