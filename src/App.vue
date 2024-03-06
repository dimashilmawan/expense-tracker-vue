<script setup>
import Header from "./components/Header.vue";
import Balance from "./components/Balance.vue";
import IncomeExpense from "./components/IncomeExpense.vue";
import TransactionListVue from "./components/TransactionList.vue";
import TransactionForm from "./components/TransactionForm.vue";
import { computed, ref } from "vue";
import TransactionList from "./components/TransactionList.vue";

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
		.filter(transaction => transaction.amount > 0)
		.reduce((acc, transaction) => {
			return acc + transaction.amount;
		}, 0);
});
const expense = computed(() => {
	return transactions.value
		.filter(transaction => transaction.amount < 0)
		.reduce((acc, transaction) => {
			return acc + transaction.amount;
		}, 0);
});
</script>

<template>
	<div class="h-screen flex items-center justify-center flex-col bg-slate-100">
		<div class="max-w-sm w-full mx-auto">
			<Header />
			<Balance :total="total" />
			<IncomeExpense :income="income" :expense="expense" />
			<TransactionList :transactions="transactions" />
			<TransactionForm />
		</div>
	</div>
</template>
