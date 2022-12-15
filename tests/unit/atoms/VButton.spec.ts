import { mount } from '@vue/test-utils';
import VButton from '@/atoms/button/VButton.vue';

const setup = (disabled = false) => {
  return mount(VButton, {
    props: {
      disabled,
    },
  });
};
describe('Button', () => {
  describe('onClick', () => {
    it('should emit click if it is not disabled', async () => {
      const cmp = setup();
      const button = cmp.find('[data-test="button"]');
      await button.trigger('click');

      expect(cmp.emitted().click.length).toBe(1);
    });

    it('should not emit click if it is disabled', async () => {
      const cmp = setup(true);
      const button = cmp.find('[data-test="button"]');
      await button.trigger('change');

      expect(cmp.emitted().click).toBeUndefined();
    });
  });
});
