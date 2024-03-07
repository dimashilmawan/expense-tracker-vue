<script setup>
import Header from "./components/Header.vue";
import Balance from "./components/Balance.vue";
import IncomeExpense from "./components/IncomeExpense.vue";
import TransactionForm from "./components/TransactionForm.vue";
import { computed, ref, onMounted } from "vue";
import TransactionList from "./components/TransactionList.vue";
import { useToast } from "vue-toastification";
import Modal from "./components/Modal.vue";

const toast = useToast();

// const transactions = ref([
//   { id: 1223, text: "harapanku", amount: 200 },
//   { id: 3434, text: "harapanku", amount: -300 },
//   { id: 2323, text: "harapanku", amount: 3434 },
//   { id: 12345, text: "harapanku", amount: -23 },
//   { id: 5675, text: "harapanku", amount: -23 },
//   { id: 567, text: "harapanku", amount: -23 },
//   { id: 1223, text: "harapanku", amount: 200 },
//   { id: 4444, text: "harapanku", amount: -300 },
//   { id: 5555, text: "harapanku", amount: 3434 },
//   { id: 1111, text: "harapanku", amount: -23 },
//   { id: 6666, text: "harapanku", amount: -23 },
//   { id: 88, text: "harapanku", amount: -23 },
// ]);

const transactions = ref([{ id: 1223, text: "harapanku", amount: 200 }]);
const showModal = ref(false);

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
  // saveToLocalStorage();
  handleCloseModal();
  toast.success("New Transaction added", { timeout: 1500 });
}

function handleDeleteTransaction(transactionId) {
  transactions.value = transactions.value.filter(
    (transaction) => transaction.id !== transactionId,
  );
  // saveToLocalStorage();
  toast.success("Transaction deleted", { timeout: 1500 });
}

function handleCloseModal() {
  showModal.value = false;
}

function saveToLocalStorage() {
  localStorage.setItem("transactions", JSON.stringify(transactions.value));
}

// onMounted(() => {
//   const savedTransactions = JSON.parse(localStorage.getItem("transactions"));
//   if (savedTransactions) transactions.value = savedTransactions;
// });
</script>

<template>
  <div class="flex min-h-screen flex-col items-center bg-slate-100 pt-16">
    <div class="mx-auto w-full max-w-sm">
      <Header />
      <Balance :total="total" />
      <IncomeExpense :income="income" :expense="expense" />
      <TransactionList
        :transactions="transactions"
        @delete-transaction="handleDeleteTransaction"
      />
      <button
        class="mt-6 flex w-full items-center justify-center rounded-md bg-indigo-600 p-3 font-semibold text-white"
        @:click="showModal = true"
      >
        Add new transaction
      </button>
      <Modal
        :showModal
        @close-modal="handleCloseModal"
        @submit-transaction="handleAddTransaction"
      />
      <!-- <TransactionForm v-else @submit-transaction="handleAddTransaction" /> -->
    </div>
  </div>
</template>
