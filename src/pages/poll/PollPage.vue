<script setup lang="ts">
import QuestionForm from '@/organisms/poll/QuestionForm.vue';
import PollQuestion from '@/organisms/poll/PollQuestion.vue';
import TotalVotes from '@/organisms/total-votes/TotalVotes.vue';
</script>

<template>
  <div class="h-screen flex flex-col">
    <h1 class="text-h1 border-b border-b-grey-300 p-4">
      Sir vote-a-lot
    </h1>
    <div class="flex flex-col md:flex-row h-full">
      <QuestionForm class="flex-1 md:border-r md:border-r-grey-300" />
      <PollQuestion
        class="flex-1 border-y border-y-grey-300 md:border-none"
      />
      <TotalVotes class="flex-1 md:border-l md:border-l-grey-300" />
    </div>
  </div>
</template>
