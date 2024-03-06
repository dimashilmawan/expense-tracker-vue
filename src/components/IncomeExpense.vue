<script setup>
defineProps({
  income: {
    type: Number,
    required: true,
  },
  expense: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div
    class="mt-6 flex w-full items-center justify-center rounded-lg bg-white p-4"
  >
    <div class="flex w-full flex-col items-center justify-center">
      <p class="text-lg font-medium uppercase">Income</p>
      <p class="font-semibold text-green-500">+${{ income.toFixed(2) }}</p>
    </div>

    <div class="h-12 w-[2px] bg-slate-700/50" />
    <div class="flex w-full flex-col items-center justify-center">
      <p class="text-lg font-medium uppercase">Expense</p>
      <p class="font-semibold text-red-500">-${{ expense.toFixed(2) }}</p>
    </div>
  </div>
</template>
