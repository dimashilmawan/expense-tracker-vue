<script setup>
import { ref } from "vue";
import { useToast } from "vue-toastification";

const text = ref("");
const amount = ref("");

const toast = useToast();

const emit = defineEmits(["submittedTransaction"]);

function handleSubmit() {
  if (!text.value || !amount.value) {
    toast.error("Error bouy", { timeout: 1500 });
    return;
  }

  emit("submittedTransaction", {
    id: Math.random() * 1000,
    text: text.value,
    amount: +amount.value,
  });
}
</script>
<template>
  <h2 class="mt-6 text-lg font-medium">New Transaction</h2>
  <form class="mt-3 space-y-3" @submit.prevent="handleSubmit">
    <div class="flex flex-col gap-1.5">
      <label for="text" class="font-medium">Text</label>
      <input
        type="text"
        id="text"
        class="rounded-md px-3 py-2"
        v-model="text"
      />
    </div>
    <div class="flex flex-col gap-1.5">
      <label for="amount" class="font-medium">Amount</label>
      <input
        type="number"
        id="amount"
        step="0.01"
        class="rounded-md px-3 py-2"
        v-model="amount"
      />
    </div>
    <button
      type="submit"
      class="!mt-8 flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold uppercase text-white"
    >
      Add
    </button>
  </form>
</template>
