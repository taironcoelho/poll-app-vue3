import { usePollStore } from '@/stores/usePollStore';
import { setActivePinia, createPinia } from 'pinia';

describe('usePollStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('should update question', () => {
    const store = usePollStore();
    store.updateQuestion('Foo bar');

    expect(store.question).toBe('Foo bar');
  });

  it('should add answers', () => {
    const store = usePollStore();
    store.addAnswer('Option A');
    store.addAnswer('Option B');

    expect(store.answers).toEqual([
      'Option A',
      'Option B',
    ]);
  });

  it('should delete an answer', () => {
    const store = usePollStore();
    store.answers = ['Option A', 'Option B'];
    store.deleteAnswer(0);

    expect(store.answers).toEqual([
      'Option B',
    ]);
  });

  it('should update an answer', () => {
    const store = usePollStore();
    store.answers = ['Option A', 'Option B'];
    store.updateAnswer(0, 'New Option A');

    expect(store.answers).toEqual([
      'New Option A',
      'Option B',
    ]);
  });

  it('should return the number of answers', () => {
    const store = usePollStore();
    store.addAnswer('Option A');
    store.addAnswer('Option B');

    expect(store.nAnswers).toBe(2);
  });

  it('should clean the state on reset', () => {
    const store = usePollStore();
    store.answers = ['Option A', 'Option B'];
    store.question = 'Foo bar';
    store.votes = {
      'Option A': 2,
      'Option B': 1,
    };
    store.reset();

    expect(store.answers).toEqual([]);
    expect(store.question).toBe('');
    expect(store.votes).toEqual({});
  });

  describe('on vote', () => {
    it('should add the first vote', () => {
      const store = usePollStore();
      store.vote('Option A');

      expect(store.votes).toEqual({ 'Option A': 1 });
    });

    it('should increment the votes', () => {
      const store = usePollStore();
      store.vote('Option A');
      store.vote('Option A');

      expect(store.votes).toEqual({ 'Option A': 2 });
    });
  });
});
