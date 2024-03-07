<script setup>
import { TrashIcon } from "@heroicons/vue/24/solid";
import { TransitionGroup } from "vue";
defineProps({
  transactions: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["deleteTransaction"]);

function handleDeleteTransaction(id) {
  emit("deleteTransaction", id);
}
</script>
<template>
  <div class="mt-6 w-full">
    <h2 class="text-lg font-medium">History</h2>
    <Transition name="empty" mode="out-in">
      <p
        v-if="transactions.length === 0"
        class="mt-4 rounded-md bg-white p-8 text-center text-lg font-semibold text-slate-600"
      >
        No Transaction
      </p>
      <TransitionGroup
        v-else
        class="relative mt-3 h-60 space-y-3 overflow-y-auto"
        tag="ul"
        name="list"
      >
        <li
          v-for="transaction in transactions"
          :key="transaction.id"
          :class="`group flex w-full items-center gap-5 rounded-md border-l-[6px] bg-white p-1.5 pl-4 ${
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
      </TransitionGroup>
    </Transition>
  </div>
</template>

<style>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-active {
  transition-delay: 0.15s;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-50%);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}

.empty-enter-active {
  transition: all 0.4s ease;
}
.empty-leave-active {
  transition: all 0.15s ease;
}

.empty-enter-from,
.empty-leave-to {
  opacity: 0;
}
</style>
