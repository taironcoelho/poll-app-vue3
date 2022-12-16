<template>
  <PollPage />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PollPage from './pages/poll/PollPage.vue';

export default defineComponent({
  name: 'App',
  components: {
    PollPage,
  },
});
</script>
