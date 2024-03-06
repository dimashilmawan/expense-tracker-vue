<script setup>
import TransactionForm from "./TransactionForm.vue";

const emit = defineProps(["closeModal", "submitTransaction"]);
</script>
<template>
  <div @click="closeModal" class="absolute inset-0 bg-slate-800/85 blur-sm" />
  <div
    class="absolute left-1/2 top-1/2 w-full max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-xl bg-slate-100 p-10"
  >
    <TransactionForm :submitTransaction />
  </div>
</template>
