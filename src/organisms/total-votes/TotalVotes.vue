<script setup lang="ts">
import { computed } from 'vue';
import BarChart from '@/molecules/chart/BarChart.vue';
import { usePollStore } from '@/stores/usePollStore';
import { storeToRefs } from 'pinia';

const { question, votes } = storeToRefs(usePollStore());

const totalVotes = computed<number>(() => {
  let total = 0;
  Object.values(votes.value).forEach((value) => (total = total + value));

  return total;
});

const dataTest = 'total-votes';
</script>

<template>
  <section class="h-full p-8 flex flex-col self-center px-8 justify-between">
    <div>
      <h2 class="text-h2 text-center mb-4">
        {{ question }}
      </h2>
      <BarChart
        :dataset="votes"
        :data-test="`${dataTest}-chart-bar`"
      />
    </div>
    <p :data-test="`${dataTest}-total`">
      Total votes: {{ totalVotes }}
    </p>
  </section>
</template>
