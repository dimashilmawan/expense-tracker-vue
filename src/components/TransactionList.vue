<script setup>
import { TrashIcon } from "@heroicons/vue/24/solid";
defineProps({
  transactions: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["deletedTransaction"]);

function handleDeleteTransaction(id) {
  emit("deletedTransaction", id);
}
</script>
<template>
  <div class="mt-6 w-full">
    <h2 class="text-lg font-medium">History</h2>
    <ul class="mt-3 space-y-3">
      <li
        v-for="transaction in transactions"
        :key="transaction.id"
        :class="`group relative flex items-center gap-5 rounded-md border-l-[6px] bg-white p-1.5 pl-4 ${
          transaction.amount > 0 ? 'border-green-500' : 'border-red-500'
        }`"
      >
        <p class="flex-1 capitalize">{{ transaction.text }}</p>
        <p class="font-medium">${{ transaction.amount.toFixed(2) }}</p>
        <button
          @click="handleDeleteTransaction(transaction.id)"
          class="flex aspect-square w-8 items-center justify-center rounded-md bg-red-500 text-white"
        >
          <TrashIcon class="h-5 w-5" />
        </button>
      </li>
    </ul>
  </div>
</template>
