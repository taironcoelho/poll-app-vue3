<script setup lang="ts">
import { defineProps, computed, PropType } from 'vue';
import { ChartData } from 'chart.js';
import { Bar } from 'vue-chartjs';

const props = defineProps({
  dataset: { type: Object as PropType<{[key: string]: number}>, required: true },
  dataTest: { type: String, required: false, default: 'bar-chart' },
});

const chartData = computed<ChartData<'bar'>>(() => {
  const datasets: number[] = [];
  const labels: string[] = [];
  Object.keys(props.dataset).forEach((label) => {
    datasets.push(props.dataset[label]);
    labels.push(label);
  });

  return {
    labels,
    datasets: [{ data: datasets, backgroundColor: '#A97BF3' }],
  };
});

const options = {
  responsive: true,
  scales: {
    y: { ticks: { stepSize: 1 } },
  },
  plugins: {
    legend: {
      display: false,
    },
    colors: {
      forceOverride: true,
    },
  },
};

</script>
<template>
  <Bar
    :data="chartData"
    :options="options"
    :data-test="props.dataTest"
  />
</template>
