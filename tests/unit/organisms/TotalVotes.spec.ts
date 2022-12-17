import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import { usePollStore } from '@/stores/usePollStore';
import TotalVotes from '@/organisms/total-votes/TotalVotes.vue';

jest.mock('@/molecules/chart/BarChart.vue', () => () => '<canvas/>');
const mockPinia = createTestingPinia({});

const setup = () => {
  return mount(TotalVotes, {
    global: {
      plugins: [mockPinia],
      stubs: ['BarChart', 'Bar'],
    },
  });
};

const pollStore = usePollStore();

describe('TotalVotes', () => {
  beforeEach(() => {
    pollStore.votes = {
      A: 3,
      B: 1,
      C: 80,
    };
  });
  it('should render the total votes properly', () => {
    const cmp = setup();
    const totalVotes = cmp.find('[data-test="total-votes-total"]');

    expect(totalVotes.text()).toContain('84');
  });
});
