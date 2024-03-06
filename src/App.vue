<script setup>
import Header from "./components/Header.vue";
import Balance from "./components/Balance.vue";
import IncomeExpense from "./components/IncomeExpense.vue";
import TransactionForm from "./components/TransactionForm.vue";
import { computed, ref } from "vue";
import TransactionList from "./components/TransactionList.vue";
import { useToast } from "vue-toastification";

const toast = useToast();
const transactions = ref([
  { id: "a1", text: "buy video game", amount: -200 },
  { id: "a2", text: "pay check", amount: 300 },
  { id: "a3", text: "sold laptop", amount: 400 },
  { id: "a4", text: "buy chair", amount: -150 },
]);

const total = computed(() => {
  return transactions.value.reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0);
});
const income = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0);
});
const expense = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0);
});

function handleAddTransaction(transactionData) {
  transactions.value.push(transactionData);
  toast.success("New Transaction added", { timeout: 1500 });
}

function handleDeleteTransaction(transactionId) {
  transactions.value = transactions.value.filter(
    (transaction) => transaction.id !== transactionId,
  );
  toast.success("Transaction deleted", { timeout: 1500 });
}
</script>

<template>
  <div
    class="flex min-h-screen flex-col items-center justify-center bg-slate-100"
  >
    <div class="mx-auto w-full max-w-sm">
      <Header />
      <Balance :total="total" />
      <IncomeExpense :income="income" :expense="expense" />
      <TransactionList
        :transactions="transactions"
        @deleted-transaction="handleDeleteTransaction"
      />
      <TransactionForm @submitted-transaction="handleAddTransaction" />
    </div>
  </div>
</template>
